import { WebsocketService } from './../../services/websocket.service';
import { UsersService } from './../../services/users.service';
import { ScoreService } from './../../services/score.service';
import { Component,  OnInit } from '@angular/core';
import { playerInit } from './score-animation';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  animations: [playerInit]
})
export class ScoreComponent implements OnInit {

  constructor( public scoreService: ScoreService, private usersService: UsersService, private websocketService: WebsocketService) { }
  
  ngOnInit(): void {
    
  }

}
