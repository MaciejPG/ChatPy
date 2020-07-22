import { ChatService } from './../../services/chat.service';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  constructor(
    private messageRepository: MessageService,
    private service: ChatService) { }

  public ngOnInit(): void {
    this.service.onConnection().subscribe(data => {
      console.log('Im in.')
    });
  }

  public onEnter(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    this.service.sendMessage({ message: 'test', user: 'maciek' });

    this.messageRepository.postMessage({ message: 'test', user: 'maciek' })
      .subscribe(data => {
        console.log(data, 'succesful');
      });
  }
}
