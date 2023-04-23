import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  }); 

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {}

}


@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ButtonModule
  ],
}
)
export class SignInModule{

}