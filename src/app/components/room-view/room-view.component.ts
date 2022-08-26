import { ModalPasswordService } from './../modal-password/modal-password.service';
import { RoomIdService } from './room-id.service';
import { Router } from '@angular/router';
import { Room } from './../../models/room';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  @Input() room: Room;
  
  constructor(private router: Router, private roomIdService: RoomIdService, public modalPasswordService: ModalPasswordService) { }

  ngOnInit(): void {
    
  }
  openRoom(roomPass: string, roomId?: string,) {
    if(roomId)
    {
      this.roomIdService._id = roomId;
      this.roomIdService.pass = roomPass;
      this.modalPasswordService.open();
    }
    this.router.navigate(['room/' + roomId])

  }
}
