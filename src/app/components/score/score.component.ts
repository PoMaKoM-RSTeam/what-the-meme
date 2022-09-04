import { animation } from '@angular/animations';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { playerInit } from './score-animation';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  animations: [playerInit]
})
export class ScoreComponent implements OnInit, OnChanges {

  

  players = [
    {
      img: "./assets/images/avatar-images/baby-yoda.jpg",
      name: "Silicon Power",
      score: 14
    },
    {
      img: "./assets/images/avatar-images/baby-yoda.jpg",
      name: "Flash",
      score: 11
    },
    {
      img: "./assets/images/avatar-images/baby-yoda.jpg",
      name: "Kevin",
      score: 4
    },
    {
      img: "./assets/images/avatar-images/baby-yoda.jpg",
      name: "Tomas",
      score: 34
    },
  ]


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.playersSort();
  }

  playersSort() {
    const sortPlayers = this.players.sort((a, b) => b.score - a.score);
    return sortPlayers;
  }
}
