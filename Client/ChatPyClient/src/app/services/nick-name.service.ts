import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NickNameService {

  private previousNickName: string;
  private nickName: string;
  constructor() { }

  public setNickName(nickName: string) {
    this.previousNickName = this.nickName;
    this.nickName = nickName;
  }

  public getNickName() {
    return this.nickName;
  }

  public getPreviousNickName() {
    return this.previousNickName;
  }
}
