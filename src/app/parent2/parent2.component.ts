import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: `./parent2.component.html`,
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
  encapsulation: ViewEncapsulation.Native
})
export class Parent2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
