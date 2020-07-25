import { Nicknames } from './../models/nicknames';
import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('ws://127.0.0.1:5000');
    // this.socket.on('connect', function() {
    //   this.socket.emit('ImIn', { data: 'Im in' });
    // });
  }

  public onConnection() {
    return new Observable(observer => {
      this.socket.on('connect', msg => {
        observer.next(msg);
      });
    });
  }

  public onLogin() {
    this.socket.emit('login', localStorage.getItem('nickname'));
  }

  public onNicknameChange(previousNickname: string) {
    this.socket.emit('nicknameChange', { previousNickname, newNickname: localStorage.getItem('nickname') } as Nicknames);
  }

  // EMITTER
  public postMessage(msg: Message) {
    this.socket.emit('postMessage', { message: msg });
  }

  // HANDLER
  public onNewMessage() {
    return new Observable<Message>(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
}
