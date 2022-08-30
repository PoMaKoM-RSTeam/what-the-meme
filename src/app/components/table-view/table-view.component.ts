import { MemesViewService } from './../memes-view/memes-view.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  
  constructor(public memesViewService: MemesViewService) { }

 
  ngOnInit(): void {
  }

}
