import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LocalOrder } from '../form-order/localOrder';
import { TakeAwayOrder } from '../form-order/takeawayOrder';
import { OrderedPizzas } from '../global-variables/ordered-pizzas';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
	constructor() {}
	ngOnInit(): void {}

	get orderedPizzasArray() {
		//TEST object
		let testOrder = {
			id: 1,
			status: 1,
			firstNameClient: 'Marco',
			lastNameClient: 'Bianchi',
			addressClient: 'via Italia, 12',
			phoneNumberClient: '390 439 4324',
			pizzasOrdered: [['Test', 10, 2]],
		};
		let myTestArray = [];
		for (let i = 1; i <= 30; i++) {
			let testOrder2 = { ...testOrder };
			testOrder2.id = i;
			myTestArray.push(testOrder2);
		}
		return myTestArray;

		//return OrderedPizzas.orderedPizzas;
	}

	/* CSS variables */
	containerOrdersCSS: string = 'container-orders';
}
