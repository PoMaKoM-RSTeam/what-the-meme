import { ScoreService } from './../../services/score.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnChanges {



  constructor( public scoreService: ScoreService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.playersSort();
  }

  playersSort() {
    const sortPlayers = this.scoreService.score.sort((a, b) => b.score! - a.score!);
    return sortPlayers;
  }

}
