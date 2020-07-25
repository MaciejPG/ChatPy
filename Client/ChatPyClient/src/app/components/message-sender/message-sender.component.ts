import { ChatService } from './../../services/chat.service';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { NickNameService } from 'src/app/services/nick-name.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  public value = '';

  constructor(
    private messageRepository: MessageService,
    private service: ChatService,
    private nickNameService: NickNameService) { }

  public ngOnInit(): void {
    this.service.onNewMessage().subscribe(data => {
      console.log(data);
    });
  }

  public onEnter(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    this.service.postMessage({user: this.nickNameService.getNickName(), message: this.value,  });
    this.value = '';

    // this.messageRepository.postMessage({ message: 'test', user: 'maciek' })
    //   .subscribe(data => {
    //     console.log(data, 'succesful');
    //   });
  }
}
