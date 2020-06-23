import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public nickname = '';

  constructor() { }

  ngOnInit(): void {
  }

  public setNickname() {
    localStorage.setItem('nickname', this.nickname);
  }

  public test(){
    console.log(this.nickname);
  }
}
