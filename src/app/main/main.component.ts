import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	// Sent data from "form-order" to "orders"
	orderFromForm = [];
	setOrderFromForm = (x) => (this.orderFromForm = x);
}
