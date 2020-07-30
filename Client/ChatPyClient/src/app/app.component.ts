import { ChatService } from './services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ChatPyClient';

  constructor(private chatService: ChatService) { }
  public ngOnInit(): void {
    // this.chatService.onConnection.sub
    // throw new Error("Method not implemented.");
  }
  public ngOnDestroy(): void {
    // this.chatService.onLeave();
    // localStorage.removeItem('nickname');
  }
}
