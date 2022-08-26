import { UsersService } from './../../services/users.service';
import { NavigationService } from '../navigation/navigation.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  chekName = false;
  currentUser: User = {}
  constructor(public navigationService: NavigationService, private userService: UsersService, private router: Router) { }
  

  ngOnInit(): void {
  }

  collectUser(link: string) {
    if (this.navigationService.name) {
      this.router.navigateByUrl(link)
      this.currentUser.name = this.navigationService.name;
      this.currentUser.image = this.navigationService.image;
      this.userService.createUser(this.currentUser).subscribe((response) => { localStorage.setItem('user', JSON.stringify(response)) });
    }
    else {
      this.chekName = true;
    }


  }
}
