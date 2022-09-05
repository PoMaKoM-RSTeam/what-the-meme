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
  currentUser: User = { }
  constructor(public navigationService: NavigationService, private userService: UsersService, private router: Router) { }
  

  ngOnInit(): void {
  }

  collectUser(link: string) {
   
    if (this.navigationService.name) {
      if (sessionStorage.getItem('user')) {
        this.userService.updateUser(JSON.parse(sessionStorage.getItem('user')!)._id, this.navigationService).subscribe((response) => { sessionStorage.setItem('user', JSON.stringify(response)) });
      } else {
        this.userService.createUser(this.navigationService).subscribe((response) => { sessionStorage.setItem('user', JSON.stringify(response)) });
      }
      this.router.navigateByUrl(link)
    }
    else {
      this.chekName = true;
    }


  }
}
