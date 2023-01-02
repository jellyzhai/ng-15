import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, ReplaySubject } from 'rxjs';
import { debounceTime, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-c',
  templateUrl: './lazy-c.component.html',
  styles: [],
})
export class LazyCComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('app-lazy-c 路由配置中 data 和 resolver 数据: ', this.route.snapshot.data)

    // this.testReplaySubject();
    // this.testThrottleTime();
    // this.testDebounceTime();
  }

  // 截取指定时间段内的数据，只处理该段时间内，第一次发出的数据
  testThrottleTime() {
    fromEvent(document, 'mouseover').pipe(map((event: Event) => (event as MouseEvent).clientX), throttleTime(2000),).subscribe(console.log)
  }

  // 在防抖的指定时间段后，没有数据再发出后，就处理发出的最后一个值
  testDebounceTime() {
    fromEvent(document, 'click').pipe(map((event: Event) => (event as MouseEvent).clientY), debounceTime(2000),).subscribe(console.log)

  }

  testReplaySubject() {
    const replaySubject = new ReplaySubject();

    replaySubject.subscribe(console.log)
    replaySubject.subscribe(console.log)

    replaySubject.next(Date.now())
    replaySubject.next(Date.now())

    // 2秒之后再订阅 会发出历史所有值
    setTimeout(() => {
      replaySubject.subscribe(console.log)
    }, 2000);
  }
}
