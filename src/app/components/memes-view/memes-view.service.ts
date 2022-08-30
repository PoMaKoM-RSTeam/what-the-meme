import { Meme } from './../../models/memes';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemesViewService {

  currentMeme: Meme[] = []
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

 
  
}
