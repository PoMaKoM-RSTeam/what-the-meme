import { RoomsService } from './../../services/rooms.service';
import { Component, OnInit } from '@angular/core';
import { joinPageAnimation } from './join-page-animation';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.css'],
  animations: [joinPageAnimation]
})
export class JoinPageComponent implements OnInit {
  page: number = 1;
  constructor(public roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getAllRooms().subscribe()
  }

  updateRooms() {
    this.roomsService.getAllRooms().subscribe()
  }
}
