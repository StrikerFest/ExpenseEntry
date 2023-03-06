import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css','../app.component.css'],
})
export class TestComponent implements OnInit {
  testString = 'String interpolation';
  userName: string = "Ace";
  userName2: string = "Ace";
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log("$event.target " ,$event.target);
      console.log("$event.target.value ", $event.target.value);
      this.userName2 = "dude";
      this.userName = "hey";
    }
  }

  columnSpan: number = 2;

  colorRed: string = "red";
  applyCSSClass: boolean = false;

  styleBinding: string = "red";

  // Directive

  ngIfElseIfLogIn: boolean = false;
  ngIfElseIfLogOut: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
