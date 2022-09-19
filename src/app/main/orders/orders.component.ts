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
		return OrderedPizzas.orderedPizzas;
	}
}
