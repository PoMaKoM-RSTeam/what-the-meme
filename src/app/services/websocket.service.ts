import { RoomIdService } from './../components/room-view/room-id.service';
import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { AnonymousSubject, Subject } from 'rxjs/internal/Subject';

const CHAT_URL = "ws://localhost:5000";

export interface Message {
  source: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

    webSocket: WebSocket;
  chatMessages: Message[] = [];

  constructor(private roomIdService: RoomIdService) { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:5000');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
      this.webSocket.send(JSON.stringify({
        source: '',
        content: '',
        method: 'connection',
        id: this.roomIdService._id
      }));
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: Message){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
