import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly messagesUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl);
  }
}
