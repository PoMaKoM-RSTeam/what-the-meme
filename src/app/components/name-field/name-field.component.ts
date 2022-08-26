import { NavigationService } from '../navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.css']
})
export class NameFieldComponent implements OnInit {
  constructor(public navigationService: NavigationService) {
   }

  ngOnInit(): void {
    
  }

}
