import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native',
  template: `
  <h2 style="color: #ffc107">Native</h2>

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
        background: orange;
      }
      .primary-important {
        background: orange !important;
      }
      .native {
        background: orange;
        color: white;
        font-size: 1.25rem;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class NativeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
