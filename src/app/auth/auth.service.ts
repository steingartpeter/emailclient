import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupCredentials, SignupResponse } from '../shared/commo-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  usernameAvailable(uname: string) {
    return this.http.post<{ available: boolean }>(
      this.rootUrl + '/auth/username',
      {
        username: uname,
        password: '',
        passwordConfirmation: '',
      }
    );
  }

  signup(credentials: SignupCredentials) {
    console.log('credentials');
    console.log(credentials);
    return this.http.post<SignupResponse>(
      this.rootUrl + '/auth/signup',
      credentials
    );
  }
}
