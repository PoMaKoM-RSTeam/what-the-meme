import { RoomIdService } from './../room-view/room-id.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalPasswordService } from './modal-password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.css']
})
export class ModalPasswordComponent implements OnInit {

  constructor(public modalPasswordService: ModalPasswordService, public roomIdService: RoomIdService) { }

  chekPass = true

  form = new FormGroup({
    pass: new FormControl<string>('', [
      Validators.required,
    ])
  })

  ngOnInit(): void {
  }
  public get pass() : FormControl {
    return this.form.controls.pass as FormControl
  }

  checkPassword() {
    if (this.roomIdService.pass === this.form.value.pass) {
      this.chekPass = true
      this.modalPasswordService.close()
    }
    else {
      this.chekPass = false
    }

  }
}
