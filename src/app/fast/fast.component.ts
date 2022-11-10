import { Component, OnInit } from '@angular/core';
import { FastApiService } from './services/fast-api.service';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.css'],
})
export class FastComponent implements OnInit {
  constructor(private apiService: FastApiService) {}

  ngOnInit() {}

  getComingSoongFilms() {
    this.apiService.getComingSoon().subscribe(console);
  }
}
