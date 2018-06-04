import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .grandparent {
        background: purple;
        color: white;
        font-size: 1.25rem;
      }
      .grandparent-important {
        background: purple !important;
        color: white !important;
        font-size: 1.25rem !important;
      }
    `
  ]
})
export class AppComponent {
  title = 'app';
}
