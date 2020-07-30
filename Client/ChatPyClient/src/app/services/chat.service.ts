import { Nicknames } from './../models/nicknames';
import { Message } from './../models/message';
import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { NickNameService } from './nick-name.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: SocketIOClient.Socket;

  constructor(private nickNameService: NickNameService) {
    this.socket = io('ws://127.0.0.1:5000');
    // this.socket.on('connect', function() {
    //   this.socket.emit('ImIn', { data: 'Im in' });
    // });
  }

  // public onConnection() {
  //   return new Observable(observer => {
  //     this.socket.on('connect', msg => {
  //       this.nickNameService.setDefault();
  //       observer.next(msg);
  //     });
  //   });
  // }

  // // @HostListener('window:beforeunload', ['$event'])
  // public onDisconnect(){
  //   return new Observable(observer => {
  //     this.socket.on('disconnect', msg => {
  //       observer.next(msg);
  //     });
  //   });
  // }

  public onLogin() {
    this.socket.emit('login', this.nickNameService.getNickName());
  }

  public onLeave() {
    this.socket.emit('leave', this.nickNameService.getNickName());
  }

  public onNicknameChange() {
    this.socket.emit(
      'nicknameChange',
      { previousNickname: this.nickNameService.getPreviousNickName(), newNickname: this.nickNameService.getNickName() } as Nicknames);
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

  public onUsersChanged(){
    return new Observable<string[]>(observer => {
      this.socket.on('usersChanged', users => {
        observer.next(users);
      });
    });
  }
}
