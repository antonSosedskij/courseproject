import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    phone: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });

}

@NgModule({
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ButtonModule
  ],
}
)
export class SignUpModule{

}


