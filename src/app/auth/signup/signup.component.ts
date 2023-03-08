import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPwd } from '../validators/match-pwd';
import { UniqueUser } from '../validators/unique-user';
import { AuthService } from '../auth.service';
import { SignupCredentials } from 'src/app/shared/commo-interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          // Validators.pattern(/^[a-z0-9A-Z]+$/),
        ],
        [this.uniqUsr.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPwd.validate] }
  );
  constructor(
    private matchPwd: MatchPwd,
    private uniqUsr: UniqueUser,
    private authSrvc: AuthService
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    //<SF>
    // CREATED ON: 2023-03-08 <br>
    // CREATED BY: AX07057<br>
    // Handle submit event.<br>
    // PARAMETERS:
    //×-
    // @-- @param = ... -@
    //-×
    //CHANGES:
    //×-
    // @-- ... -@
    //-×
    //</SF>

    //<nn>
    // Check if the FORM is not valid => just return
    //</nn>
    if (this.authForm.invalid) {
      console.log('INVALID' + this.authForm.value);
      return;
    }
    //console.log(this.authForm.value);
    this.authSrvc
      .signup(<SignupCredentials>this.authForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
