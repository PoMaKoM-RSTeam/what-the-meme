import { User } from 'src/app/models/user';
import { UsersService } from './../../services/users.service';
import { RoomIdService } from './../room-view/room-id.service';
import { WebsocketService } from './../../services/websocket.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  userName = ''
  user: User = {}
  currentRoomId = '';
  constructor(public WebsocketService: WebsocketService, public roomIdService: RoomIdService, private usersService: UsersService) { 
    
  }

  sendMessage(sendForm: NgForm) {
    const message = {
      user: this.userName,
      content: sendForm.value.message,
      method: 'message',
      id: this.currentRoomId
    }

    this.WebsocketService.sendMessage(message);

    sendForm.controls.message.reset();
  }

  ngOnInit(): void {
    this.currentRoomId = this.roomIdService._id
    
    this.user = JSON.parse(sessionStorage.getItem('user') as string)
    this.usersService.getUser(this.user._id).subscribe(response => this.userName = response.name as string)

  }
  ngOnDestroy(): void {
    this.WebsocketService.closeWebSocket();
  }
}
