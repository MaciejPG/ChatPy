import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input()
  public showForm = true;

  @Output()
  public showFormChange = new EventEmitter<boolean>();

  public nickname = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.onConnection().subscribe(data => {
      console.log('Im in.');
    });
  }

  public setNickname() {
    const previousNickname = localStorage.getItem('nickname');
    console.log(previousNickname);
    this.handleNicknameModification(previousNickname);

    this.setFormVisibility();
    this.handleServerEvents(previousNickname);
  }

  private handleNicknameModification(previousNickname: string) {
    if (previousNickname) {
      console.log('removing');
      localStorage.removeItem('nickname');
    }
    localStorage.setItem('nickname', this.nickname);
  }

  private setFormVisibility() {
    this.showForm = false;
    this.showFormChange.emit(this.showForm);
  }

  private handleServerEvents(previousNickname: string) {
    if (previousNickname) {
      this.chatService.onNicknameChange(previousNickname);
    }
    else {
      this.chatService.onLogin();
    }
  }
}
