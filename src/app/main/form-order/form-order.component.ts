import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalOrder } from './localOrder';
import { TakeAwayOrder } from './takeawayOrder';

@Component({
	selector: 'app-form-order',
	templateUrl: './form-order.component.html',
	styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
	@Output() orderForm = new EventEmitter(); //To send data to Parent

	constructor() {}
	ngOnInit(): void {}

	/* VARIABLES */
	isTakeAway: boolean = false;
	orderID: number = 0;
	numberTable: string = '';
	firstNameClient: string = '';
	lastNameClient: string = '';
	addressClient: string = '';
	phoneNumberClient: string = '';
	orderedPizzasList: Array<[string, number, number]> = [['new Pizza', 0, 1]]; //Array that will contain the details of the pizza ordered

	/* SETTERS */
	setIsTakeAway = () => (this.isTakeAway = !this.isTakeAway);
	setNumberTable = (e) => (this.numberTable = e.target.value);
	setFirstNameClient = (e) => (this.firstNameClient = e.target.value);
	setLastNameClient = (e) => (this.lastNameClient = e.target.value);
	setAddressClient = (e) => (this.addressClient = e.target.value);
	setPhoneNumberClient = (e) => (this.phoneNumberClient = e.target.value);

	/* METHODS */

	/*
		Pizza Order methods:
		Some methods of the pizza order form, like add new pizza in the order,
		delete pizza from the order, change pizza type, price and quantity.
	*/
	addOrderForm() {
		this.orderedPizzasList.push(['new Pizza', 0, 1]);
	}

	deleteOrderForm(index: number) {
		this.orderedPizzasList.splice(index, 1);
	}

	changePizza(e, index) {
		let pizzaName = e.target[e.target.options.selectedIndex].text; //text of option tag
		let pizzaPrice = parseFloat(e.target.value); //value of option tag

		this.orderedPizzasList[index][0] = pizzaName;
		this.orderedPizzasList[index][1] = pizzaPrice;
	}
	changeQuantity(e, index) {
		let pizzaQuantity = parseInt(e.target.value);

		this.orderedPizzasList[index][2] = pizzaQuantity;
	}

	/*
		sendOrder(): The method push the data of the form, in two ways, depend on the state
		of "isTakeAway".
	*/
	sendOrder() {
		let orderObj: object;
		if (this.checkCompleteForm()) {
			this.orderID++;
			if (this.isTakeAway) {
				orderObj = new TakeAwayOrder(
					this.orderID,
					this.firstNameClient,
					this.lastNameClient,
					this.addressClient,
					this.phoneNumberClient,
					this.orderedPizzasList
				);
			} else {
				orderObj = new LocalOrder(
					this.orderID,
					this.numberTable,
					this.orderedPizzasList
				);
			}
			this.orderForm.emit(orderObj);
			this.cleanForm();
		} else {
			window.alert('Order form incomplete!');
		}
	}

	checkCompleteForm(): boolean {
		let isCompleteForm = false;
		if (this.isTakeAway) {
			isCompleteForm =
				this.firstNameClient == '' ||
				this.lastNameClient == '' ||
				this.addressClient == '' ||
				this.phoneNumberClient == '' ||
				this.checkOrderedPizzasList()
					? false
					: true;
		} else {
			isCompleteForm =
				this.numberTable == '' || this.checkOrderedPizzasList() ? false : true;
		}
		return isCompleteForm;
	}

	//Check array of ordered pizzas list if has some invalid fields
	checkOrderedPizzasList(): boolean {
		let isListIncorrect = false;
		for (let order of this.orderedPizzasList) {
			isListIncorrect = order.includes('new Pizza');
			if (isListIncorrect == true) {
				break;
			}
		}
		return isListIncorrect;
	}

	cleanForm() {
		this.numberTable = '';
		this.firstNameClient = '';
		this.lastNameClient = '';
		this.addressClient = '';
		this.phoneNumberClient = '';
		this.orderedPizzasList = [['new Pizza', 0, 1]];
	}

	/* 
		PLACEHOLDER DATABASE: 
		these are the fake data to use during development
	*/
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
