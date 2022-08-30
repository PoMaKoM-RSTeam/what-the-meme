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

  constructor() { }

  ngOnInit(): void {
    this.waitingText();
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
