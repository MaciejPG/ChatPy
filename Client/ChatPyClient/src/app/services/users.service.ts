import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public usersChanged = new EventEmitter<string[]>();
}
