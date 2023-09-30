import json, os, time

from flask import Flask, request, jsonify

from backend import support_funcs

app = Flask(__name__)


ROOT = os.path.realpath(os.path.dirname(__file__))

@app.post("/api/v1/Patient/Visit/ScanId")
def scan_id():

    NUMBER_PATH = os.path.join(ROOT, "database", "currentNumber.json")
    QUEUES_PATH = os.path.join(ROOT, "database", "queues.json")

    #change number dict
    number_dict = json.load(open(NUMBER_PATH))

    number = number_dict["data"]["currentNumber"]

    room = support_funcs.generate_room_number()

    queue = support_funcs.generate_queue()

    #create final response
    response = {"currentNumber": number,
                "room": room,
                "queue": queue,
                "timestamp": time.time()}

    #add record to queues
    queues_dict = json.load(open(QUEUES_PATH))

    queues_dict["data"].append({
        "number": number,
        "room": room,
        "queue": queue
    })

    with open(QUEUES_PATH, 'w') as j_file:
        json.dump(queues_dict, j_file)

    new_number = number + support_funcs.add_place_in_queue()

    number_dict["data"] = {"currentNumber": new_number}

    with open(NUMBER_PATH, 'w') as json_file:
        json.dump(number_dict, json_file)


    return jsonify(response)