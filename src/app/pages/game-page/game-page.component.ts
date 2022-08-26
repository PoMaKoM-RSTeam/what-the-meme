import { ModalPasswordService } from './../../components/modal-password/modal-password.service';
import { RoomIdService } from './../../components/room-view/room-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  currentRoomId = '';
  constructor(public roomIdService: RoomIdService, public modalPasswordService: ModalPasswordService) { 
    this.currentRoomId = this.roomIdService._id
  }

  ngOnInit(): void {
  }

}
