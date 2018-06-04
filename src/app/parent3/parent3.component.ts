import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: `./parent3.component.html`,
  styles: [
    `
      .parent-box p {
        margin: 0.5rem;
      }
      .box {
        border: 2px black solid;
        margin: 20px;
        width: 200px;
        display: inline-block;
      }
      .parent {
        background: black;
        color: white;
        font-size: 1.25rem;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class Parent3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
