import { NavigationService } from '../navigation/navigation.service';
import { AvatarService } from './../../services/avatar.service';
import { Avatar } from './../../models/avatar';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatarImages: Avatar[] = [];
  avatarImage = './assets/images/avatar-images/baby-yoda.jpg';
  avatarName = 'Baby Yoda';
  count = 1;
  constructor(public avatarsService: AvatarService, private navigationService: NavigationService) { 
    this.navigationService.image = this.avatarImage
  }

  ngOnInit(): void {
    this.avatarsService.getAllAvatars().subscribe((avatarImage) => {
       this.avatarImages = avatarImage
    })
  }

  changeAvatar() {
    if (this.count === this.avatarImages.length - 1) {
      this.avatarImage = this.avatarImages[this.count].path
      this.avatarName = this.avatarImages[this.count].name as string
      this.navigationService.image = this.avatarImage;
      this.count = 0
    }
    else{
      this.avatarImage = this.avatarImages[this.count].path
      this.avatarName = this.avatarImages[this.count].name as string
      this.navigationService.image = this.avatarImage;
      this.count += 1;
    }
    
  }

}
