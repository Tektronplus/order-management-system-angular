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
  mainOrderArray = [];

  isTakeAway: boolean = false;

  numberTable: string = '';
  firstNameClient: string = '';
  lastNameClient: string = '';
  addressClient: string = '';
  phoneNumberClient: string = '';

  orderPizzaFormDB: Array<[string, number, number]> = [['Pizza', 0, 0]];

  /* SETTERS & GETTERS  */
  setIsTakeAway = () => (this.isTakeAway = !this.isTakeAway);
  setNumberTable = (e) => (this.numberTable = e.target.value);
  setFirstNameClient = (e) => (this.firstNameClient = e.target.value);
  setLastNameClient = (e) => (this.lastNameClient = e.target.value);
  setAddressClient = (e) => (this.addressClient = e.target.value);
  setPhoneNumberClient = (e) => (this.phoneNumberClient = e.target.value);

  /* METHODS */

  //Data Client methods

  //Pizza Order Methods
  addOrderForm() {
    this.orderPizzaFormDB.push(['Pizza', 0, 0]); //TEST
  }

  deleteOrderForm(index: number) {
    this.orderPizzaFormDB.splice(index, 1);
  }

  changePizza(e, index) {
    let pizzaName = e.target[e.target.options.selectedIndex].text;
    let pizzaPrice = parseFloat(e.target.value);

    this.orderPizzaFormDB[index][0] = pizzaName;
    this.orderPizzaFormDB[index][1] = pizzaPrice;
  }
  changeQuantity(e, index) {
    let pizzaQuantity = e.target.value;

    this.orderPizzaFormDB[index][2] = pizzaQuantity;
  }

  //Send Order
  sendOrder() {
    if (this.isTakeAway) {
      this.mainOrderArray.push([
        this.firstNameClient,
        this.lastNameClient,
        this.addressClient,
        this.phoneNumberClient,
        this.orderPizzaFormDB,
      ]);
    } else {
      this.mainOrderArray.push([this.numberTable, this.orderPizzaFormDB]);
    }
    console.log(this.mainOrderArray);
  }

  //Test Methods
  printTest() {
    console.log(this.orderPizzaFormDB);
    console.log(this.firstNameClient);
    console.log(this.lastNameClient);
    console.log(this.addressClient);
    console.log(this.phoneNumberClient);
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
}
