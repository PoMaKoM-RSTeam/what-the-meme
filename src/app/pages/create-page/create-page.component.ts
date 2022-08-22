import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  privateMode = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      pass: new FormControl(''),
      members: new FormControl(2),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
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
}
