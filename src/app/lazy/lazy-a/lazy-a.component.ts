import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-a',
  templateUrl: './lazy-a.component.html',
  styleUrls: ['./lazy-a.component.scss']
})
export class LazyAComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      // 浏览器地址栏中删除查询参数，打印的就是空对象
      console.log('app-lazy-a 查询参数：', queryParams);
    });


    this.route.params.subscribe((params) => {
      console.log('app-lazy-a 路径参数：', params);
    });
  }

}
