import { Message } from '../models/message';
import { RoomIdService } from './../components/room-view/room-id.service';
import { Injectable } from '@angular/core';



const CHAT_URL = "ws://localhost:5000";



@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

    webSocket: WebSocket;
  chatMessages: Message[] = [];
  situationMessgae: Message = {
    content: '',
    method: 'situation'
  };

  constructor(private roomIdService: RoomIdService) { }

  public openWebSocket(roomId: string){
    this.webSocket = new WebSocket('ws://localhost:5000');
    this.webSocket.onopen = () => {
    this.webSocket.send(JSON.stringify({id: roomId, method: 'connection'}));
    };


    this.webSocket.onmessage = (event) => {
      const MessageDto = JSON.parse(event.data);
      if (MessageDto.method === 'message') {
        this.chatMessages.push(MessageDto);
      }
      console.log(event)
      if (MessageDto.method === 'situation') {
        this.situationMessgae = MessageDto
        console.log(this.situationMessgae)
      }
    };

    this.webSocket.onclose = (event) => {
      this.chatMessages = []
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
