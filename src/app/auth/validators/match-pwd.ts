import { AbstractControl, FormGroup, Validator } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPwd implements Validator {
  validate(fGrp: AbstractControl) {
    const pwd1 = fGrp.value['password'];
    const pwd2 = fGrp.value['passwordConfirm'];

    if (pwd1 !== pwd2) {
      return { 'passwords are different': true };
    } else {
      return null;
    }
  }
  registerOnValidatorChange?(fn: () => void): void {}
}
