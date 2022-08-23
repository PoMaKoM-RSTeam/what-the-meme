import { Room } from './../../models/room';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  @Input() room: Room;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
