import { Meme } from './../../models/memes';
import { WebsocketService } from './../../services/websocket.service';
import { MemesViewService } from './../memes-view/memes-view.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit, OnDestroy {

  situationMessage = ''
  
  constructor(public memesViewService: MemesViewService, public websocketService: WebsocketService) { }


 
  ngOnInit(): void {
    this.situationMessage = this.websocketService.situationMessgae.content
  }
  ngOnDestroy(): void {
    this.memesViewService.currentMeme = []
  }
}
