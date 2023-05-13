import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
  ) {
  
  }

  onSubmit(form: FormGroup){
    let account = {
      login: form.value.login,
      password: form.value.password,
      email: form.value.email
    }

    this.auth.signUp(account).subscribe((data) => {
      this.router.navigate(['']);
      console.log(data);
      this.ref.close();
    });
  }


}

@NgModule({
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ButtonModule,
    NgIf
  ],
}
)
export class SignUpModule{

}


