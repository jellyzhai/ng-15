import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterContentInit {
  @ContentChild(ChildComponent) childComp!: ChildComponent

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.count += 1;
  }
}
