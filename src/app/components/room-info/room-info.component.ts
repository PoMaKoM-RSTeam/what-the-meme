import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicChildLoaderDirective } from 'src/app/directives/dynamic-child-loader.directive';
import { Room } from 'src/app/models/room';
import { RoomsService } from 'src/app/services/rooms.service';
import { ModalComponent } from '../modal/modal.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  roomPath = this.router.url;
  roomId = this.roomPath.slice(this.roomPath.lastIndexOf('/') + 1);
  roomInfo: Room;

  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  constructor(private roomsService: RoomsService, private router: Router, private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  openRoomInfo() {
    this.roomsService.getRoom(this.roomId).subscribe((response) => {
      this.roomInfo = response;
      let text = `Room name: ${response.name}\n`;
      if (response.pass) text += ` Room pass: ${response.pass}\n`;
      text += ` Max players: ${response.members}`;
      this.showModal(text);
    })


  }
  private showModal(text: string) {
    const modal = this.dynamicChild.viewContainerRef.createComponent(ModalComponent);
    modal.instance.title = 'Room info';
    modal.instance.text = text.trim();
    modal.instance.actionButtonText = 'Копровать ссылку'
    modal.instance.actionButton = true;
    modal.instance.copyLink.subscribe(() => {
      this.clipboard.copy(this.router.url);
      modal.instance.actionButtonText = 'Ссылка скопированна';
    })
    modal.instance.close.subscribe(() => {
      this.dynamicChild.viewContainerRef.clear();
    })
  }
}
