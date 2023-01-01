import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-c',
  templateUrl: './lazy-c.component.html',
  styles: [],
})
export class LazyCComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('app-lazy-c 路由配置中 data 和 resolver 数据: ', this.route.snapshot.data)
  }
}
