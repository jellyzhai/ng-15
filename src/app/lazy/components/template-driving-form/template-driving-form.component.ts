import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driving-form',
  templateUrl: './template-driving-form.component.html',
  styleUrls: ['./template-driving-form.component.scss'],
})
export class TemplateDrivingFormComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form:NgForm) {
    console.log(form)
    console.log(form.value)
  }
}
