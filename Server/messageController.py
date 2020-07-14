import flask
from models.message import Message
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
from flask_socketio import send, emit

app = flask.Flask(__name__)
# CORS(app, resources ={r"/*":{"origins":"*"}})
CORS(app)
app.config["DEBUG"] = True
app.config['SECRET_KEY']='such_a_secret'
socketio = SocketIO(app)
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
    return response

@socketio.on('json', namespace='/test')
def send_message(json):
    messageObj = Message(**json)
    messages.append(messageObj)
    print(messageObj.message, messageObj.user)
    print(len(messages))
    send(messageObj, json = True, namespace = '/test', skip_sid=True)

# @socketio.on('message')
# def handle_message(message):
#     print('received message: ' + message)

socketio.run(app)
