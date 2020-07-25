import { ChatService } from './../../services/chat.service';
import { MessageService } from './../../services/message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public showForm = true;

  private gc = new Subject();

  public messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private chatService: ChatService) { }

  ngOnInit(): void {
    this.fetchMessages();
    this.chatService.onNewMessage().subscribe(msg => {
      this.messages.push(msg);
      console.log(this.messages, msg);
    });
  }

  public showLoginForm(){
    this.showForm = true;
  }

  public ngOnDestroy(): void {
    this.chatService.onLeave();


    this.gc.next();
    this.gc.complete();
  }

  private fetchMessages(){
    this.messageService.getMessages()
    .pipe(takeUntil(this.gc))
    .subscribe(messages => {
      this.messages = messages;
    },
    err => {
      this.messages = null;
    });
  }
}
