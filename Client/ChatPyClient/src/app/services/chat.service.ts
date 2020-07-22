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

  // EMITTER
  public sendMessage(msg: Message) {
    this.socket.emit('sendMessage', { message: msg });
  }

  // HANDLER
  public onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
}
