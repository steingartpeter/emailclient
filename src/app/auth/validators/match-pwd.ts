import { AbstractControl, FormGroup, Validator } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPwd implements Validator {
  validate(fGrp: AbstractControl) {
    const pwd1 = fGrp.value['password'];
    const pwd2 = fGrp.value['passwordConfirmation'];

    if (pwd1 !== pwd2) {
      return { passwords_are_different: true };
    } else {
      return null;
    }
  }
  registerOnValidatorChange?(fn: () => void): void {}
}
