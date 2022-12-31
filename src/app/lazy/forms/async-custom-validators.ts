import { FormControl, ValidationErrors } from '@angular/forms';

export class AsyncCustomValidators {
  static cannotDuplicate(
    control: FormControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        +(Math.random() * 10).toFixed(1) > 5
          ? resolve(null)
          : resolve({ cannotDuplicate: true });
      }, 2000);
    });
  }
}
