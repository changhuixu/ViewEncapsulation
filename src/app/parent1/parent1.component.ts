import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: `./parent1.component.html`,
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
  encapsulation: ViewEncapsulation.Emulated
})
export class Parent1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
