import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      last_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      birth_date: new FormControl("", [Validators.required]),
      phone_number: new FormControl("", [Validators.minLength(7)]),
      email_address: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      re_password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      physical_address: new FormControl("", [Validators.minLength(2)]),
      city: new FormControl("", [Validators.minLength(2)]),
      state: new FormControl(""),
      country: new FormControl("", [Validators.required, Validators.minLength(2)]),
      user_status: new FormControl("", [Validators.required])
    }, {
      validators: this.checkPasswords
    });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('re_password')?.value;
    return pass === confirmPass ? null : { notSame: true}
  }

  signup(): void {
    this.signupForm.removeControl('input_re_password');
    this.authService
    .signup(this.signupForm.value)
    .subscribe((msg) => console.log(msg));
  }

}
