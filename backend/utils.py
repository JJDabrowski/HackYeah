import os, json

from random import randint

def add_place_in_queue():
    return randint(1,5)

def generate_room_number():
    return randint(1,300)

def generate_queue():
    return randint(2,15)

examination_list = ["gałki ocznej", "przełyku", "drożności tchawicy", "czwartej komory mózgu", "przedsionka serca", "znamion na skórze", "stanu kości", "ruchomości stawów"]

def generate_name():
    name = "Badanie "
    randomized_name_no = randint(0, len(examination_list)-1)
    name = name + examination_list[randomized_name_no]
    del examination_list[randomized_name_no]

    return name


ROOT = os.path.realpath(os.path.dirname(__file__))

QUEUES_PATH = os.path.join(ROOT, "database", "queues.json")
queues_dict = json.load(open(QUEUES_PATH))


def get_place_in_line(queue_for_number):
    for patient in queues_dict["data"]:
        if patient["number"] == int(queue_for_number):
            return patient["queue"]

    return None