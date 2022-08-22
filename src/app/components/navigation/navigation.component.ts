import { NavigationService } from '../navigation/navigation.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser: User = {}
  constructor(private navigationService: NavigationService) { }
  
  ngOnInit(): void {
  }

  collectUser() {
    this.currentUser.name = this.navigationService.name;
    this.currentUser.image = this.navigationService.image;
    console.log(this.currentUser)
  }
}
