import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DynamicChildLoaderDirective } from 'src/app/directives/dynamic-child-loader.directive';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  privateMode = false;
  room: Room;
  admin: User;
  anon = JSON.stringify({
    name: 'Anon',
    image: './assets/images/avatar-images/baby-yoda.jpg'
  })

  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  constructor(private roomService: RoomsService) {

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
      this.admin = JSON.parse(localStorage.getItem('user') || this.anon)
      this.room = this.form.value;
      this.room.users = [this.admin.name || 'Anton'];
      this.room.image = this.admin.image || '';
      this.roomService.createRoom(this.room).subscribe();
    } else {
      this.showModal();
    }
  }

  changeGameMode(mode: String) {
    if (mode === 'private') {
      this.form.controls.pass.addValidators([Validators.required, Validators.minLength(1)]);
      this.form.controls.pass.setValue('');
      this.privateMode = true;
    }
    if (mode === 'public') {
      this.form.controls.pass.clearValidators();
      this.privateMode = false;
      this.form.controls.pass.setValue('');
    }
  }

  private showModal() {
    const modal = this.dynamicChild.viewContainerRef.createComponent(ModalComponent);
    modal.instance.title = 'Create room error';
    modal.instance.text = 'Please enter correct data';
    modal.instance.close.subscribe(() => {
      this.dynamicChild.viewContainerRef.clear();
    })
  }
}
