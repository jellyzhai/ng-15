import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lazy-b',
  templateUrl: './lazy-b.component.html',
  styleUrls: ['./lazy-b.component.scss'],
})
export class LazyBComponent implements OnInit {
  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];

  tplSelectVal = this.states[3];

  reactiveForm = this.fm.group({
    select: this.fm.control(this.states[3])
  });

  get reactiveSelect() {
    return this.reactiveForm.get('select');
  }

  constructor(private fm: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveSelect?.valueChanges.subscribe(console.log);
  }
}
