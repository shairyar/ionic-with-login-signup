import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      password_confirmation: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  submitSignupForm() {
    this.router.navigateByUrl('/articles');
  }

}
