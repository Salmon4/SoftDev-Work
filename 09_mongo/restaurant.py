from pyongo import MongoClient

client = MongoClient('localhost', 27017);
db = client.K09
collection = db.restaurants
