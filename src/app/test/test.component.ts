import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  testString = 'String interpolation';
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log("$event.target " ,$event.target);
      console.log("$event.target.value " ,$event.target.value);
    }
  }

  userName: string = "Ace";
  userName2: string = "Ace";
  constructor() {}

  ngOnInit(): void {}
}
