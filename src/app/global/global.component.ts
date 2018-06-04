import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `
  <h2 style="color: #007bff">Parent</h2>

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
  styles: []
})
export class GlobalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
