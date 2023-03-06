import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from './expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css', '../app.component.css'],
})

export class ExpenseEntryComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry;

  constructor() {}

  ngOnInit(): void {
    this.title = "Expense Entry";
    this.expenseEntry = {
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Earth",
      spendOn: new Date(2023, 3, 3, 10, 10, 10),
      createdOn: new Date(2023, 3, 3, 10, 10, 10),
    };
  }
}
