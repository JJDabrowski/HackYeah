import json, os, time

from flask import Flask, request, jsonify

from flask_cors import CORS

from backend import utils

app = Flask(__name__)
CORS(app)

#PATIENT ENDPOINTS
@app.post("/api/v1/Patient/Visit/ScanId")
def scan_id():

    NUMBER_PATH = os.path.join(utils.ROOT, "database", "currentNumber.json")

    #change number dict
    number_dict = json.load(open(NUMBER_PATH))

    number = number_dict["data"]["currentNumber"]

    room = utils.generate_room_number()

    queue = utils.generate_queue()

    #create final response
    response = {"data":
                    {
                        "currentNumber": number,
                        "room": room,
                        "queue": queue,
                        "timestamp": time.time()
                    }
                }

    #add record to queues
    utils.queues_dict["data"].append({
        "number": number,
        "room": room,
        "queue": queue
    })

    with open(utils.QUEUES_PATH, 'w') as j_file:
        json.dump(utils.queues_dict, j_file)

    new_number = number + utils.add_place_in_queue()

    number_dict["data"] = {"currentNumber": new_number}

    with open(NUMBER_PATH, 'w') as json_file:
        json.dump(number_dict, json_file)

    return jsonify(response)


@app.post("/api/v1/Patient/Visit/Postpone")
def postpone_the_visit():

    queue_for_number = request.args.get('number')

    places_count = request.args.get('places')

    dict_number = None
    place_in_line = None


    for p_number, patient in enumerate(utils.queues_dict["data"]):
        if patient["number"] == int(queue_for_number):
            dict_number = p_number
            place_in_line = patient["queue"]

    if dict_number is not None:
        new_place = place_in_line + int(places_count)

        utils.queues_dict["data"][dict_number]["queue"] = new_place

        with open(utils.QUEUES_PATH, 'w') as json_file:
            json.dump(utils.queues_dict, json_file)

        return jsonify({"cloudResponse": "Success. Queue postponed"})

    return jsonify({"cloudResponse": "Failure. No queue to postpone"})


@app.get("/api/v1/Patient/Visit/GetCurrentQueue")
def get_current_queue():

    queue_for_number = request.args.get('number')

    place_in_line = utils.get_place_in_line(queue_for_number)

    response = {"data": {"queue": place_in_line}}

    return response


#DOCTOR ENDPOINTS
@app.post("/api/v1/Doctor/VisitFinished")
def visit_finished():

    room = request.args.get("room")

    if len(utils.queues_dict["data"]) < 2:
        utils.queues_dict["data"].clear()

        with open(utils.QUEUES_PATH, 'w') as json_file:
            json.dump(utils.queues_dict, json_file)

        return {"cloudStatus": "The patient was removed from all the queues"}
    else:
        for p_no, patient in enumerate(utils.queues_dict["data"]):
            if patient["room"] == int(room):
                utils.queues_dict["data"][p_no]["queue"] += 1

                with open(utils.QUEUES_PATH, 'w') as json_file:
                    json.dump(utils.queues_dict, json_file)

                return {"cloudStatus": "The patient was moved in the queue"}

    return {"cloudStatus": "fatal error"}

