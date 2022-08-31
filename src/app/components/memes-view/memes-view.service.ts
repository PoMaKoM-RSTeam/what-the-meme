import { Meme } from './../../models/memes';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemesViewService {

  currentMeme: Meme[] = []
  memes: Meme[] = []
  imgLink = ''
  constructor() { }
  
  drop(event: CdkDragDrop<Meme[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  returneOneItem(item: CdkDrag<Meme>, list: CdkDropList<Meme[]>) {
    return (
      list.getSortedItems().length < 1
    )
  }

  dblclickMove(event: MouseEvent) {
    const item = event.target as HTMLElement
    const itemAtrr: string = item.closest('.meme-img')?.getAttribute('src')!
    this.imgLink = itemAtrr.split('https://agile-reef-40611.herokuapp.com/').join('').trim()
    const activeMeme: Meme = this.memes.find((meme: Meme) => meme.link === this.imgLink)!
    if (this.currentMeme.length === 0) {
      this.currentMeme = [...this.memes.splice(this.memes.indexOf(activeMeme),1)]
    } else {
      this.memes.push(this.currentMeme[0])
      this.currentMeme = [...this.memes.splice(this.memes.indexOf(activeMeme),1)]
    }
    
  }
  
}
