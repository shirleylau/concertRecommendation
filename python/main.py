from flask import Flask, request
from pymongo import MongoClient
import json
app = Flask(__name__)
client = MongoClient()

db = client.test_db
collection = db.test_collection
thangs = db.thangs

data = {
    'item1': {
        'name': 'shoe',
        'color': 'blue'
    },
    'item2': {
        'name': 'hat',
        'color': 'green'
    },
    'item3': {
        'name': 'toe',
        'color': 'yellow'
    },
    'item4': {
        'name': 'scarf',
        'color': 'purple'
    }
}

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/shirley/<string>")
def cookie(string):
    jsonSt = json.dumps([string])
    return jsonSt

@app.route('/data/<item>')
def retrieve(item):
    x = data.get(item)
    if x is None:
        return 'Sorry, that don\'t exist.', 404
    return json.dumps(x)

@app.route('/what/', methods=['GET'])
def query():
    params = request.args.get('key','')
    print(params)
    cursor = db.thangs.find({'genres':'country'})
    for document in cursor:
        print(document)



if __name__ == "__main__":
    app.run(debug=True)
