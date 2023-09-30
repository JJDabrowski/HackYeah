import json, os, time

from flask import Flask, request, jsonify

from backend import utils

app = Flask(__name__)


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
    return ""


@app.get("/api/v1/Patient/Visit/GetCurrentQueue")
def get_current_queue():

    queue_for_number = request.args.get('number')

    place_in_line = None

    for queue in utils.queues_dict["data"]:
        if queue["number"] == int(queue_for_number):
            place_in_line = queue["queue"]
            break


    response = {"data": {"queue": place_in_line}}

    return response