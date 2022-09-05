import { RoomIdService } from './../room-view/room-id.service';
import { StateService } from './../../services/state.service';
import { WebsocketService } from './../../services/websocket.service';
import { MemesViewService } from './../memes-view/memes-view.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { sitationInit } from './table-view-animation';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  animations: [sitationInit]
})
export class TableViewComponent implements OnInit, OnDestroy {
  
  constructor(public memesViewService: MemesViewService, private roomIdService: RoomIdService, public websocketService: WebsocketService,  public stateService: StateService) { }

  memePosition = 0
  sub: Subscription
  isVoting: boolean = false

  ngOnInit(): void {
    this.sub = this.stateService.gameState.subscribe((gameState)=>{
      if (gameState === 'Голосование') {
        this.isVoting=true;
      }else {
        this.memePosition = 0;
        this.isVoting=false;
      }
    });
  }

  skipMeme() {
    if (this.memesViewService.votingMemes.length!==0 && this.memePosition < this.memesViewService.votingMemes.length) {
     if (this.memePosition==this.memesViewService.votingMemes.length-1) {
       this.isVoting = false
     }
      this.memesViewService.currentMeme[0].link = this.memesViewService.votingMemes[this.memePosition==this.memesViewService.votingMemes.length-1?this.memePosition: this.memePosition+1].link
      this.memePosition+=1;
    } 
  }
  likeMeme() {
    
    if (this.memesViewService.votingMemes.length!==0 && this.memePosition <= this.memesViewService.votingMemes.length) {
      if (this.memePosition==this.memesViewService.votingMemes.length-1) {
        this.isVoting = false
      }
      this.memesViewService.currentMeme[0].link = this.memesViewService.votingMemes[this.memePosition==this.memesViewService.votingMemes.length-1?this.memePosition: this.memePosition+1].link
      const message = {
        user: this.memesViewService.votingMemes[this.memePosition]._id,
        content:'1',
        method: 'score',
        id: this.roomIdService._id
      }
      this.websocketService.sendMessage(message);
      this.memePosition+=1;
    }

  }
  ngOnDestroy(): void {
    this.memesViewService.currentMeme = []
    this.sub.unsubscribe();
  }

}
