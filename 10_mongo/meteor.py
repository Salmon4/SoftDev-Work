from bson.json_util import loads
from pymongo import MongoClient

client = MongoClient('localhost', 27017);
db = client.frootNinjas
collection = db.meteors

if (collection.count() == 0):
    f = open("meteor.json", "r")
    data = f.readlines()
    for line in data:
        collection.insert_one(loads(line))

def findMass(name):
    results = collection.find({"name" : name})
    for result in results:
        print(result["mass"])

findMass("Aachen")

def findLocation(name):
    results = collection.find({"name" : name})
    for result in results:
        ans = result["reclat"] + " " + result["reclong"]
        print(ans)

findLocation("Aachen")

def findClass(name):
    results = collection.find({"name" : name})
    for result in results:
        print(result["recclass"])

findClass("Aachen")

def findYear(name):
    results = collection.find({"name" : name})
    for result in results:
        print(result["year"])

findYear("Aachen")
