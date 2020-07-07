import flask
from models.message import Message
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

messages = [
    {'user': 'asdasfasdas1', 'message':'Message from server1'},
    {'user': 'asdasfasdas2', 'message':'Message from server2'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
]

@app.route('/', methods=['GET'])
def home():
    return jsonify(messages)

app.run()

@app.route('/get', methods=['GET'])
def getMessages():
    return jsonify(messages)

@app.route('/post', methods=['POST'])
def post():
    response = request.json
    message = Message(**response)
    print(message)