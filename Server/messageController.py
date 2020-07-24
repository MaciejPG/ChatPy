import flask
from models.message import Message
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from flask_socketio import SocketIO
from flask_socketio import send, emit
import json

app = flask.Flask(__name__)
# CORS(app, resources ={r"/*":{"origins":"*"}})
CORS(app)
app.config["DEBUG"] = True
app.config['SECRET_KEY']='such_a_secret'
socketio = SocketIO(app)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config['CORS_HEADERS'] = 'Content-Type'


messages = [
    {'user': 'ChatPy', 'message':'Welcome.'},
]

@app.route('/get-messages', methods=['GET'])
def getMessages():
    return jsonify(messages)

@app.route('/post', methods=['POST'])
def post():
    response = request.json
    return response

# @socketio.on('newMessage')
# def send_message(json):
#     messageObj = Message(**json)
#     messages.append(messageObj)
#     print(messageObj.message, messageObj.user)
#     print(len(messages))
#     send(messageObj)

# @socketio.on('newMessage')
# def get_messages():
#     print('aaaaaaaaaa!!')
#     return messages

@socketio.on('connect')
def on_webscokect_connection_established():
    print('It works')

@socketio.on('postMessage')
def handle_sent_message(msg):
    messages.append(msg['message'])
    print(messages)
    emit('newMessage', msg['message'], broadcast = True, json = True)
    # print(len(messages))
    # print(msg)

# @socketio.on('handleNewMessage')
# def handle_new_message(msg):
#     emit()

# @socketio.on('message')
# def handle_message(message):
#     print('received message: ' + message)

socketio.run(app)
