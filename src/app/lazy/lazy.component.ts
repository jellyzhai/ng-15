import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getComingSoongFilms() {
    this.apiService.getComingSoon().subscribe(console)
  }
}
