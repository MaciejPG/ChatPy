import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NickNameService } from 'src/app/services/nick-name.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input()
  public showForm = true;

  @Output()
  public showFormChange = new EventEmitter<boolean>();

  public nickname = '';

  constructor(
    private chatService: ChatService,
    private nickNameService: NickNameService) { }


  public setNickname() {
    // const previousNickname = localStorage.getItem('nickname');
    // console.log(previousNickname);
    // this.handleNicknameModification(previousNickname);
    this.nickNameService.setNickName(this.nickname);

    this.setFormVisibility();
    this.handleServerEvents();
  }

  // private handleNicknameModification(previousNickname: string) {
  //   if (previousNickname) {
  //     console.log('removing');
  //     localStorage.removeItem('nickname');
  //   }
  //   localStorage.setItem('nickname', this.nickname);
  // }

  private setFormVisibility() {
    this.showForm = false;
    this.showFormChange.emit(this.showForm);
  }

  private handleServerEvents() {
    const previousNickName = this.nickNameService.getPreviousNickName();
    if (previousNickName) {
      this.chatService.onNicknameChange();
    }
    else {
      this.chatService.onLogin();
    }
  }
}
