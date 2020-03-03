from bson.json_util import loads
from pymongo import MongoClient

client = MongoClient('localhost', 27017);
db = client.frootNinjas
collection = db.rickMorty

if (collection.count() == 0):
    f = open("rickMorty.json", "r")
    data = f.readlines()
    for line in data:
        collection.insert_one(loads(line))
    print(collection)

# def findGenre():
#     result = collection.find({"genres" : 0})
#     print("Genres" + genres + "\n")
#     for item in result:
#         print(item["name"])
#
# findGenre()

def findName(episode):
    result = collection.find({"_embedded.episodes" : episode})
    for episode in result:
        print(episode["name"])

findName(2)
