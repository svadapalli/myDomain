import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
  }

  topFunction() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}