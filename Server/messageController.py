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
app.config['SECRET_KEY'] = 'such_a_secret'
socketio = SocketIO(app)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config['CORS_HEADERS'] = 'Content-Type'

serverNickname = 'ChatPy'

messages = [
    {'user': 'ChatPy', 'message': 'Welcome.'},
]


users = []


@app.route('/get-messages', methods=['GET'])
def getMessages():
    return jsonify(messages)


@app.route('/post', methods=['POST'])
def post():
    response = request.json
    return response


@socketio.on('connect')
def on_webscokect_connection_established():
    print('It works')
    emit('usersChanged', users, broadcast = True, json = True)


# @socketio.on('disconnect')
# def on_disconnect():
#     emit('usersChanged', [], broadcast = True, json = True)
    
#     print('User has left.')


@socketio.on('login')
def on_login(nickname):
    serverMessage = {'user': serverNickname,
                    'message': nickname + ' has joined.'}

    users.append(nickname)
    emit('newMessage', serverMessage, broadcast=True, json=True)
    emit('usersChanged', users, broadcast = True, json = True)


@socketio.on('nicknameChange')
def on_nickname_change(nicknames):
    prevNickname = nicknames['previousNickname']
    nickname = nicknames['newNickname']

    if prevNickname in users:
        users.remove(prevNickname)

    users.append(nickname)

    serverMessage = {'user': serverNickname, 'message': 'User ' +
                    prevNickname + ' has changed name to ' + nickname + '.'}
    emit('newMessage', serverMessage, broadcast=True, json=True)
    emit('usersChanged', users, broadcast = True, json = True)

# @socketio.on('leave')
# def on_leave(nickname):
#     print('leave')
#     serverMessage = {'user': serverNickname, 'message': nickname +' has left.'}
#     emit('newMessage', serverMessage, broadcast=True, json=True)


@socketio.on('postMessage')
def handle_sent_message(msg):
    messages.append(msg['message'])
    emit('newMessage', msg['message'], broadcast=True, json=True)


socketio.run(app)
