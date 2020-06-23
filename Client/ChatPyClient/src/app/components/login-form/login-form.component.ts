import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input()
  public showForm = false;

  @Output()
  public showFormChange = new EventEmitter<boolean>();

  public nickname = '';

  constructor() { }

  ngOnInit(): void {
  }

  public setNickname() {
    localStorage.setItem('nickname', this.nickname);
    this.showForm = true;
    this.showFormChange.emit(this.showForm);
  }

  public test() {
    console.log(this.nickname);
  }
}
