import json, os

from flask import Flask, request, jsonify

app = Flask(__name__)

ROOT = os.path.realpath(os.path.dirname(__file__))

@app.post("/api/v1/Patient/Visit/ScanId")
def scan_id():


    NUMBER_PATH = os.path.join(ROOT, "database", "currentNumber.json")

    number_dict = json.load(open(NUMBER_PATH))

    number = number_dict["data"]["currentNumber"]

    response = {"currentNumber": number}

    new_number = number + 1

    number_dict["data"] = {"currentNumber": new_number}

    with open(NUMBER_PATH, 'w') as json_file:
        json.dump(number_dict, json_file)

    return jsonify(response)