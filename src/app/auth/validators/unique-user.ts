import {
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
  Validator,
} from '@angular/forms';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUser implements AsyncValidator {
  constructor(private authSrvc: AuthService) {}
  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authSrvc.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available == true) {
          return null;
        }
        return value;
      }),
      catchError((err) => {
        //console.log(err);
        if (err.error.username) {
          if (err.status) {
            return of({});
          } else {
            return of({ nonUniqueUsername: true });
          }
        } else {
          return of({ networkError: true });
        }
      })
    );
  };
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
