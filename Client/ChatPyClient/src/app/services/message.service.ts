import { Message } from 'src/app/models/message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly messagesUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.messagesUrl}/get-messages`);
  }

  public postMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.messagesUrl}/post`, message);
  }
}
