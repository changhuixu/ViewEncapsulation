import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `
  <h2 style="color: #28a745">Emulated</h2>

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
        background: green;
      }
      .primary-important {
        background: green !important;
      }
      .emulated {
        background: green;
        color: white;
        font-size: 1.25rem;
      }
    `
  ]
})
export class EmulatedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
