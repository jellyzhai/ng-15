import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-null-or-loading',
  templateUrl: './null-or-loading.component.html',
  styleUrls: ['./null-or-loading.component.scss'],
})
export class NullOrLoadingComponent implements OnInit {
  @Input() isLoading!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
