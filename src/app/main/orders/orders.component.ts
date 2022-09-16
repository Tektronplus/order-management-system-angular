import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnChanges {
	@Input() newOrder;

	constructor() {}

	ngOnInit(): void {}

	/* GETTING DATA */
	listOfOrders = [];
	ngOnChanges() {
		if (this.newOrder.length != 0) {
			this.listOfOrders.push(this.newOrder);
		}
		console.log(this.listOfOrders);
	}
}
