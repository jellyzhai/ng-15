import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TemplateDrivingFormComponent } from '../components/template-driving-form/template-driving-form.component';
import { IsSaveForm } from '../guard/save-form.guard';

@Component({
  selector: 'app-lazy-b',
  templateUrl: './lazy-b.component.html',
  styleUrls: ['./lazy-b.component.scss'],
})
export class LazyBComponent implements OnInit, IsSaveForm {
  @ViewChild(TemplateDrivingFormComponent) tplDrivingFormComp!: TemplateDrivingFormComponent

  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];

  tplSelectVal = this.states[3];

  reactiveForm = this.fm.group({
    select: this.fm.control(this.states[3]),
  });

  get reactiveSelect() {
    return this.reactiveForm.get('select');
  }

  constructor(private fm: FormBuilder,private route: ActivatedRoute) {}

  isSaveForm() {
    return this.tplDrivingFormComp.isSaveForm;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // 浏览器地址栏中删除查询参数，打印的就是空对象
      console.log('app-lazy-b 路径参数：', params);
    });
  }
}
