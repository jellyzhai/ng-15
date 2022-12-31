import { FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static noneSpace(control: FormControl): ValidationErrors | null {
    if(control.value.includes(' ')) {
      return {
        noneSpace: true
      };
    }
    return null
  }

  static validPhone(control: FormControl): ValidationErrors | null {
    const value = control.value.trim();
    if(!value || (!isNaN(+value) && value.length === 11)) {
      return null
    }
    return {
      validPhone: true,
    };
  }
}
