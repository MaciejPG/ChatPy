import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  public message = '';
  @Input()
  public user = 'User';
  public date = '';

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.date = mm + '/' + dd + '/' + yyyy;
  }
}
