import { UsersService } from './../../services/users.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: string[] = [];

  public usersChanged = new EventEmitter<string[]>();
  constructor(
    private chatService: ChatService,
    private usersService: UsersService) { }

  public ngOnInit(): void {
    this.chatService.onUsersChanged().subscribe(users => {
      this.users = users;
      this.usersService.usersChanged.emit(this.users);
    });
  }
}
