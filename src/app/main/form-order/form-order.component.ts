import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /* VARIABLES */
  isTakeAway: boolean = false;

  /* SETTERS & GETTERS  */
  setIsTakeAway = () => (this.isTakeAway = !this.isTakeAway);

  /* METHODS */
  addOrderForm() {
    this.ordersFormDB.push(['Margherita', 1, 1]); //TEST
  }

  deleteOrderForm(index: number) {
    this.ordersFormDB.splice(index, 1);
  }

  /* PLACEHOLDER DATABASE */
  tablesDB: string[] = [
    'n°01',
    'n°02',
    'n°03',
    'n°04',
    'n°05',
    'n°06',
    'n°07',
    'n°08',
    'n°09',
    'n°10',
    'n°11',
    'n°12',
    'n°13',
    'n°14',
    'n°15',
    'n°16',
    'n°17',
    'n°18',
    'n°19',
    'n°20',
  ];
  pizzasDB: Array<[string, number]> = [
    ['Marinara', 4.9],
    ['Pugliese', 5.9],
    ['Napoli', 5.9],
    ['Contadino', 6.9],
    ['Capricciosa', 4.9],
    ['Bufala', 4.9],
    ['Monzese', 4.9],
    ['Ananas', 10.9],
  ];
  ordersFormDB: Array<[string, number, number]> = [['Margherita', 1, 1]];
}
