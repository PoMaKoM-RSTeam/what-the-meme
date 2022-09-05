import { MemesService } from './../../services/memes.service';
import { MemesViewService } from './../memes-view/memes-view.service';
import { StateService } from './../../services/state.service';
import { RoomIdService } from './../room-view/room-id.service';
import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomUser } from 'src/app/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnDestroy {

  time = 30;
  activeButton = true;
  timerIsActive = false;
  buttonText = 'Начать';
  stateText = 'Ожидание игроков';
  user: RoomUser
  constructor(public WebsocketService: WebsocketService, private memeService: MemesService, public roomIdService: RoomIdService, public stateService: StateService, private memesViewService: MemesViewService) {}
 
  sub: Subscription
 
  ngOnInit(): void {
    this.activeButton = this.roomIdService.roomState ==='IsOpen'
    this.sub = this.stateService.gameState.subscribe((gameState)=>{
      if (gameState === 'Собираем мемы') {
        const message = {
          user: JSON.parse(sessionStorage.getItem('user')!)._id,
          content: this.memesViewService.currentMeme[0]?.link,
          method: 'meme',
          id: this.roomIdService._id
        }
        this.WebsocketService.sendMessage(message)
      }
      if (gameState === 'Выберите мем') {
        this.memesViewService.currentMeme = []
        this.memeService.getAllMemes().subscribe((memes) => {
          this.memesViewService.memes = memes
          this.memesViewService.memes = this.memesViewService.getRandomArrayElements(this.memesViewService.memes, 5)
        })
      }
      if (gameState === 'Голосование') {
        if (this.WebsocketService.memes) {
          this.memesViewService.votingMemes = this.WebsocketService.memes.filter(meme => meme._id !== JSON.parse(sessionStorage.getItem('user')!)._id)
        this.memesViewService.currentMeme[0] = this.memesViewService.votingMemes[0]
        }
        
      }
      if (gameState !== 'Ожидание игроков') {
        this.activeButton = false;
      }
    });
    
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
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.memesViewService.memes = []
  }
 
}
