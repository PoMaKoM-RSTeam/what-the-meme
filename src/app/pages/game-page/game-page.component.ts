import { WebsocketService, Message } from './../../services/websocket.service';
import { ModalPasswordService } from './../../components/modal-password/modal-password.service';
import { RoomIdService } from './../../components/room-view/room-id.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
  providers: [WebsocketService]
})
export class GamePageComponent implements OnInit, OnDestroy {

  title = 'socketrv';
  content = '';
  received: Message[] = [];
  sent: Message[] = [];
  currentRoomId = '';
  constructor(public WebsocketService: WebsocketService, public roomIdService: RoomIdService, public modalPasswordService: ModalPasswordService) {
    this.currentRoomId = this.roomIdService._id
    
  }


  ngOnInit(): void {
    this.WebsocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.WebsocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const message = {
      source: '',
      content: sendForm.value.message,
      method: 'message',
      id: this.currentRoomId
    }
    this.received.push(message);

    this.WebsocketService.sendMessage(message);

   sendForm.controls.message.reset();
  }
 

}
