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

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('nickname');
  }

  public setNickname() {
    localStorage.setItem('nickname', this.nickname);
    this.showForm = false;
    this.showFormChange.emit(this.showForm);
  }
}
