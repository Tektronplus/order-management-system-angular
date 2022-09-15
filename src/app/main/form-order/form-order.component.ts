import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  /* VARIABLES */
  isTakeAway: boolean = false;


  setIsTakeAway = () => this.isTakeAway = !this.isTakeAway;

  /* PLACEHOLDER DATABASE */
  tablesDB: string[] = ["n°01", "n°02", "n°03", "n°04", "n°05", "n°06", "n°07", "n°08", "n°09", "n°10", "n°11", "n°12", "n°13", "n°14", "n°15", "n°16", "n°17", "n°18", "n°19", "n°20"]
  pizzaDB: Array<[string, number]> = [["Marinara", 4.90], ["Pugliese", 5.90], ["Napoli", 5.90], ["Contadino", 6.90], ["Capricciosa", 4.90], ["Bufala", 4.90], ["Monzese", 4.90], ["Ananas", 10.90]]
}
