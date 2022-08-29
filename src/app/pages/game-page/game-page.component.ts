import { WebsocketService } from './../../services/websocket.service';
import { ModalPasswordService } from './../../components/modal-password/modal-password.service';
import { RoomIdService } from './../../components/room-view/room-id.service';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  currentRoomId = '';
  path = this.router.url;
  room: Room;
  isRoomReady = false;

  constructor(public WebsocketService: WebsocketService, public roomIdService: RoomIdService, public modalPasswordService: ModalPasswordService, private router: Router, private roomService: RoomsService) {
  
  }

  ngOnInit(): void {
    this.currentRoomId = this.roomIdService._id
    this.WebsocketService.openWebSocket(this.currentRoomId);
    const [, , id] = this.path.split('/');
    const room = this.roomService.getRoom(id).subscribe(response => { this.initRoom(response) });
  }

  initRoom(roomInfo: Room) {
    this.isRoomReady = true;
    console.log(roomInfo)
    this.room = roomInfo;
  }
}