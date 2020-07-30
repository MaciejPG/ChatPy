import { ChatService } from './../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NickNameService } from 'src/app/services/nick-name.service';
import { FormControl, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input()
  public showForm = true;
  @Input()
  public users: string[];

  @Output()
  public showFormChange = new EventEmitter<boolean>();

  public nickname = '';

  public form: FormGroup;

  public submitted = false;

  constructor(
    private chatService: ChatService,
    private nickNameService: NickNameService,
    private fb: FormBuilder) {

  }
  public ngOnInit(): void {
    this.form = this.fb.group({
      nicknameControl: [this.nickname]
    },
      { validator: this.nicknameValidator() }
    );
  }


  public setNickname() {
    this.submitted = true;
    this.nickname = this.form.controls.nicknameControl.value;
    if (!this.form.valid) {
      return;
    }
    this.nickNameService.setNickName(this.nickname);

    this.setFormVisibility();
    this.handleServerEvents();
  }

  private setFormVisibility() {
    this.showForm = false;
    this.showFormChange.emit(this.showForm);
  }

  private handleServerEvents() {
    const previousNickName = this.nickNameService.getPreviousNickName();
    if (previousNickName !== '') {
      this.chatService.onNicknameChange();
    }
    else {
      this.chatService.onLogin();
    }
  }

  private nicknameValidator() {
    return (control: FormGroup) => {
      const value: string = control.controls?.nicknameControl?.value;

      return this.users.some(nickname => nickname === value) || value === '' || value === null ? { 'nickname': { value: value } } : null;
    };
  }
}
