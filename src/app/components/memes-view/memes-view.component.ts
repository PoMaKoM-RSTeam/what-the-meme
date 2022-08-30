import { MemesViewService } from './memes-view.service';
import { Meme } from './../../models/memes';
import { MemesService } from './../../services/memes.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-memes-view',
  templateUrl: './memes-view.component.html',
  styleUrls: ['./memes-view.component.css']
})
export class MemesViewComponent implements OnInit {

  constructor(public memeService: MemesService, public memesViewService: MemesViewService) { }
  
  ngOnInit(): void {
    this.memeService.getAllMemes().subscribe((memes) => {
      this.memesViewService.memes = memes
      this.memesViewService.memes = this.getRandomArrayElements(this.memesViewService.memes, 5)
    })
  }
  
  getRandomArrayElements(arr: Meme[], count: number) {
    return arr.sort(() => .5 - Math.random()).slice(0,count)
  }

  
  
}