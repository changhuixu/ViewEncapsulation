import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `
  <h2 style="color: #dc3545">None</h2>

  <p class="global">
    .global
  </p>
  <p class="global-important">
    .global-important
  </p>
  <p class="grandparent">
    .grandparent
  </p>
  <p class="grandparent-important">
    .grandparent-important
  </p>
  <p class="parent">
    .parent
  </p>
  <p class="emulated">
    .emulated
  </p>
  <p class="native">
    .native
  </p>
  <p class="none">
    .none
  </p>
`,
  styles: [
    `
      .primary {
        background: red;
      }
      .primary-important {
        background: red !important;
      }
      .none {
        background: red;
        color: white;
        font-size: 1.25rem;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
