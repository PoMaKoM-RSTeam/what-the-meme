import { MemesViewService } from './../components/memes-view/memes-view.service';
import { UsersService } from './users.service';
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
  timer: Message = {
    content: '',
    method: 'timer'
  }
  gameState: Message = {
    content: '',
    method: 'gameState'
  }

  constructor(private roomIdService: RoomIdService, private usersService: UsersService, private memeService: MemesViewService) { }

  public openWebSocket(roomId: string){
    this.webSocket = new WebSocket('ws://localhost:5000');
    this.webSocket.onopen = () => {
    this.webSocket.send(JSON.stringify({id: roomId, method: 'connection'}));
    this.webSocket.send(JSON.stringify({user: JSON.parse(localStorage.getItem('user')!).name, id: roomId, content: 'Зашёл в комнату', method: 'message'}));
    };


    this.webSocket.onmessage = (event) => {
      const MessageDto = JSON.parse(event.data);
      if (MessageDto.method === 'message') {
        this.chatMessages.push(MessageDto);
      }
      if (MessageDto.method === 'situation') {
        this.situationMessgae = MessageDto
      }
      if (MessageDto.method === 'timer') {
        this.timer = MessageDto
      }
      if (MessageDto.method === 'gameState') {
        this.gameState = MessageDto
        this.roomIdService.gameState = this.gameState.content
        // if (this.roomIdService.gameState === 'Голосование') {
        //   this.memeService.collectMemes()
        // }
        
      }
    };
   
    this.webSocket.onclose = (event) => {
      this.chatMessages = []
      this.situationMessgae = {content: '', method: 'situation'}
      this.timer = {content: '', method: 'timer'}
      console.log('Close: ', event);
    }; 
  }
  public sendMessage(chatMessageDto: Message){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close( 3002, `${this.usersService.user._id} ${this.roomIdService._id}` );
  }
}
