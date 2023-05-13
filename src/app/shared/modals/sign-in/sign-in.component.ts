import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  signInForm = new FormGroup({
    login: new FormControl('',
    Validators.required
    ),
    password: new FormControl('',
    Validators.required)
  }); 

  constructor(
    private auth: AuthService,
    private router: Router,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
  ) {}

  onSubmit(form: FormGroup){
    let account = {
      login: form.value.login,
      password: form.value.password
    }

    this.auth.signIn(account).subscribe((data) => {
      localStorage.setItem("token", data);
      this.ref.close();
      this.router.navigate(['']);
    });
    

  }

}


@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ButtonModule,
    NgIf
  ],
}
)
export class SignInModule{

}