import { Component } from '@angular/core';

@Component({
  // component selector name
  selector: 'app-root',
  // template location
  // can put in either raw code or url
  templateUrl: './app.component.html',
  // style location
  // can put raw style or url
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Expense Entry';
}
