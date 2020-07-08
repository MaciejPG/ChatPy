import { MessageService } from './../../services/message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  public showForm = true;

  private gc = new Subject();

  public messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.fetchMessages();
  }

  public showLoginForm(){
    this.showForm = true;
  }

  public ngOnDestroy(): void {
    localStorage.removeItem('nickname');

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
