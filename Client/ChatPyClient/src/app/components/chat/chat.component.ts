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
    {message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, user: 'UserNickname'},
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
