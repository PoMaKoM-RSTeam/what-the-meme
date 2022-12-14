import { RoomIdService } from './../../components/room-view/room-id.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DynamicChildLoaderDirective } from 'src/app/directives/dynamic-child-loader.directive';
import { Room } from 'src/app/models/room';
import { User, RoomUser } from 'src/app/models/user';
import { RoomsService } from 'src/app/services/rooms.service';
import { createPageAnimation, passContainer } from './create-page-animation';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
  animations: [createPageAnimation, passContainer]
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  privateMode = false;
  room: Room;
  admin: RoomUser;
  anon = JSON.stringify({
    name: 'Anon',
    image: './assets/images/avatar-images/baby-yoda.jpg'
  })

  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  constructor(private roomService: RoomsService, private router: Router, public roomIdService: RoomIdService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      pass: new FormControl(''),
      members: new FormControl(2),
    });

  }
  
  onSubmit(): void {
    if (this.form.valid) {
      this.admin = JSON.parse(sessionStorage.getItem('user') || this.anon)
      this.room = this.form.value;
      this.room.users = [this.admin];
      this.room.image = this.admin.image || '';
      this.room.admin = this.admin._id!
      this.roomService.createRoom(this.room).subscribe(response => {
        this.room._id = response._id; this.router.navigateByUrl(`/room/${this.room._id}`)
        this.roomIdService._id = this.room._id!
      });
    } else {
      this.showModal();
    }
  }

  changePrivateMode() {
    if (!this.privateMode) {
      this.form.controls.pass.addValidators([Validators.required, Validators.minLength(1)]);
      this.form.controls.pass.setValue('');
      this.privateMode = true;

    } else {
      this.form.controls.pass.clearValidators();
      this.form.controls.pass.setValue('');
      this.privateMode = false;
    }
  }

  private showModal() {
    const modal = this.dynamicChild.viewContainerRef.createComponent(ModalComponent);
    modal.instance.title = '???????????? ???????????????? ??????????????';
    modal.instance.text = '?????????????????? ?????? ????????';
    modal.instance.actionButton = false;
    modal.instance.close.subscribe(() => {
      this.dynamicChild.viewContainerRef.clear();
    })
  }
}
