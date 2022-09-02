import { RoomIdService } from './../room-view/room-id.service';
import { UsersService } from './../../services/users.service';
import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(public WebsocketService: WebsocketService, public roomIdService: RoomIdService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.waitingText();
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
  waitingText() {
    setInterval(() => {
      switch(this.stateText) {
        case 'Ожидание игроков':
          this.stateText = 'Ожидание игроков.';
          break;
        case 'Ожидание игроков.':
          this.stateText = 'Ожидание игроков..';
          break;
        case 'Ожидание игроков..':
          this.stateText = 'Ожидание игроков...';
          break;
        case 'Ожидание игроков...':
          this.stateText = 'Ожидание игроков';
          break;
        default:
          this.stateText = 'Ожидание игроков'
      }
    }, 1000);
  }

}
