import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public showForm = true;

  public messages: Message[] = [
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
    {message: 'Message 1', user: 'UserNickname'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public showLoginForm(){
    this.showForm = true;
  }

  public ngOnDestroy(): void {
    localStorage.removeItem('nickname');
  }
}
