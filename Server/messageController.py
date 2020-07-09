import flask
from models.message import Message
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
# CORS(app, resources ={r"/*":{"origins":"*"}})
CORS(app)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'


messages = [
    {'user': 'asdasfasdas1', 'message':'Message from server1'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
    {'user': 'asdasfasdas3', 'message':'Message from server3'},
]

@app.route('/get-messages', methods=['GET'])
def getMessages():
    return jsonify(messages)

@app.route('/post', methods=['POST'])
def post():
    response = request.json
    message = Message(**response)
    messages.append(message)
    print(message.message, message.user)
    print(len(messages))
    return response

app.run()
