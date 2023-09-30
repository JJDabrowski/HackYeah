import os, json

from random import randint

def add_place_in_queue():
    return randint(1,5)

def generate_room_number():
    return randint(1,300)

def generate_queue():
    return randint(2,15)


ROOT = os.path.realpath(os.path.dirname(__file__))

QUEUES_PATH = os.path.join(ROOT, "database", "queues.json")
queues_dict = json.load(open(QUEUES_PATH))