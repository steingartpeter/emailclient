import {
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
  Validator,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUser implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: value,
    });
  };
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
