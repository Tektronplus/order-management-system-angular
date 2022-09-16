import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LocalOrder } from '../form-order/localOrder';
import { TakeAwayOrder } from '../form-order/takeawayOrder';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnChanges {
	@Input() newOrder: object = null;

	constructor() {}

	ngOnInit(): void {}

	/* GETTING DATA */
	listOfOrders = [];
	ngOnChanges() {
		if (Object.keys(this.newOrder).length != 0) {
			this.listOfOrders.push(this.newOrder);
		}
		console.log(this.listOfOrders);
	}

	isInstanceOfLocalOrder(x): boolean {
		return x instanceof LocalOrder;
	}
}
