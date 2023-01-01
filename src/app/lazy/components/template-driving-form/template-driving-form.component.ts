import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driving-form',
  templateUrl: './template-driving-form.component.html',
  styleUrls: ['./template-driving-form.component.scss'],
})
export class TemplateDrivingFormComponent implements OnInit, AfterViewInit {
  @ViewChild('tplForm', {static: true}) tplForm!: NgForm

  isSaveForm = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('tplForm： ', this.tplForm);
  }

  onSubmit(form:NgForm) {
    this.isSaveForm = true;
    console.log(form)
    console.log(form.value)
  }
}
