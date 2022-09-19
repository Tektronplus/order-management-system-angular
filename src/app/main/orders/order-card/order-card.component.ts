import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { LocalOrder } from '../../form-order/localOrder';
import { TakeAwayOrder } from '../../form-order/takeawayOrder';
import { OrderedPizzas } from '../../global-variables/ordered-pizzas';

@Component({
	selector: 'app-order-card',
	templateUrl: './order-card.component.html',
	styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit, OnChanges {
	@Input() order = null;
	totQuantityPizzas: number = 0;
	totImportPizzas: any = 0;

	constructor() {}
	ngOnInit(): void {
		for (let pizza of this.order.pizzasOrdered) {
			this.totQuantityPizzas += pizza[2];
			this.totImportPizzas += pizza[1];
		}
		this.totImportPizzas = parseFloat(this.totImportPizzas).toFixed(2);
	}

	isInstanceOfLocalOrder: boolean;
	ngOnChanges(changes: SimpleChanges): void {
		this.isInstanceOfLocalOrder = this.order instanceof LocalOrder;
	}

	/* METHODS */
	getIndexOrder(): number {
		let index;
		index = OrderedPizzas.orderedPizzas
			.map(function (e) {
				return e.id;
			})
			.indexOf(this.order.id);
		return index;
	}

	updateStatusOrder() {
		let index = this.getIndexOrder();
		OrderedPizzas.orderedPizzas[index].status += 1;
	}

	deleteOrder() {
		let index = this.getIndexOrder();
		OrderedPizzas.orderedPizzas.splice(index, 1);
	}

	pricePizza(price) {
		return parseFloat(price).toFixed(2);
	}
}
