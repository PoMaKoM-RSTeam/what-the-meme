import { RoomsService } from './../../services/rooms.service';
import { RoomIdService } from './../room-view/room-id.service';
import { UsersService } from './../../services/users.service';
import { WebsocketService } from './../../services/websocket.service';
import { Component, Input, OnInit } from '@angular/core';
import { RoomUser } from 'src/app/models/user';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  time = 30;
  activeButton = true;
  timerIsActive = false;
  buttonText = 'Начать';
  stateText = 'Ожидание игроков';
  user: RoomUser

  constructor(public WebsocketService: WebsocketService, public roomIdService: RoomIdService, private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.activeButton = this.roomIdService.roomState ==='IsOpen'

  }
  startGame() {
    const message = {
      content: '',
      method: 'start',
      id: this.roomIdService._id
    }
    this.WebsocketService.sendMessage(message);
    this.activeButton = false;
  }

}
