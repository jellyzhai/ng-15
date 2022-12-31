import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncCustomValidators } from '../../forms/async-custom-validators';
import { CustomValidators } from '../../forms/custom-validators';

@Component({
  selector: 'app-model-driving-form',
  templateUrl: './model-driving-form.component.html',
  styleUrls: ['./model-driving-form.component.scss'],
})
export class ModelDrivingFormComponent implements OnInit {
  // form: FormGroup = new FormGroup({
  //   name: new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //   }),
  //   concat: new FormArray([]),
  // });
  form: FormGroup = this.fb.group({
    name: this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
    }),
    gender: ['male'],
    phone: [
      '',
      [
        Validators.required,
        CustomValidators.validPhone,
        CustomValidators.noneSpace,
      ],
      [AsyncCustomValidators.cannotDuplicate],
    ],
    hobbies: this.fb.array([]),
    school: ['', [Validators.required, CustomValidators.noneSpace]],
    concat: this.fb.array([]),
  });

  get firstName() {
    return this.form.get(['name', 'firstName']);
  }

  get lastName() {
    return this.form.get(['name', 'lastName']);
  }

  get phone() {
    return this.form.get('phone');
  }

  get school() {
    return this.form.get('school');
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  get concat() {
    return this.form.get('concat') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addConcat();
  }

  addConcat() {
    const concat = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          CustomValidators.validPhone,
          CustomValidators.noneSpace,
        ],
        [AsyncCustomValidators.cannotDuplicate],
      ],
      address: ['', [Validators.required, CustomValidators.noneSpace]],
    });

    this.concat.push(concat);
  }

  removeConcat(index: number) {
    this.concat.removeAt(index);
  }

  onChangeHobby(event: Event) {
    const target = event.target as HTMLInputElement;
    const control = new FormControl(target.value);

    if (target.checked) {
      this.hobbies.push(control);
    } else {
      const index = this.hobbies.controls.findIndex(
        (control) => control.value === target.value
      );
      this.hobbies.removeAt(index)
    }
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form);
  }
}
