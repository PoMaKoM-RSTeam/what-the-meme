import { WebsocketService, Message } from './../../services/websocket.service';
import { ModalPasswordService } from './../../components/modal-password/modal-password.service';
import { RoomIdService } from './../../components/room-view/room-id.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

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

  path = this.router.url;
  room: Room;
  isRoomReady = false;

  constructor(public WebsocketService: WebsocketService,public roomIdService: RoomIdService, public modalPasswordService: ModalPasswordService, private router: Router, private roomService: RoomsService) {
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
    const [, , id] = this.path.split('/');
    const room = this.roomService.getRoom(id).subscribe(response => { this.initRoom(response) });
  }

  closeLobby() {
    this.router.navigateByUrl('');
  }

  initRoom(roomInfo: Room) {
    this.isRoomReady = true;
    console.log(roomInfo)
    this.room = roomInfo;
  }
 

}