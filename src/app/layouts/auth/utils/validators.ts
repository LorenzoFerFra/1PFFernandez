import {AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

  export const noBoyValidator: ValidatorFn = (
    control : AbstractControl
  ): ValidationErrors | null => {
    if (typeof control.value === 'string' && (control.value.includes('bart') || control.value.includes('milhouse'))  ){
        return{
            noBoy: true,
        }
    }

    return null;
  }