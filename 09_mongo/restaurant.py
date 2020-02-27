import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017);
db = client.K09
collection = db.restaurants

with open('primer-dataset.json') as f:
    file_data = json.load(f)

collection.insert_one(file_data)
client.close()
