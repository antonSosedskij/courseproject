import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  infoUpdateForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{11}")
    ]),
    address: new FormControl('', [
      Validators.required
    ])
  });

  passwordResetForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });


  passwordReset(){
    alert("Done!")
  }
}
