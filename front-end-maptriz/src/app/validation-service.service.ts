import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  emailValidator(control: AbstractControl): ValidationErrors | null  {
    const value = control.value;
    if(value) {
      let isValid = false;
      if(isValid) return null;
      else return { inUse: true };
    }
    return null;
  }
  
  constructor() { }
}
