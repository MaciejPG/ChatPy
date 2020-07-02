import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public nicknamePicked = false;

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

}
