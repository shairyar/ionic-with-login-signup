import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.signInForm = this.formBuilder.group({
      user: this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }),
    });
  }

  ngOnInit() {
  }

  submitSignInForm() {
    this.apiService.signIn(this.signInForm.value).subscribe(response => {
      console.log('response is: ', response);
      if (response.status === 200) {
        this.authenticationService.login(response.rows);
      }
    }, (error) => {
      this.signInForm.controls['password'].reset();
      console.log(error);
    });
  }

}
