import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {

  constructor(private messageRepository: MessageService) { }

  public onEnter(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    this.messageRepository.postMessage({ message: 'test', user: 'maciek' })
      .subscribe(data => {
        console.log(data, 'succesful');
      });
  }
}
