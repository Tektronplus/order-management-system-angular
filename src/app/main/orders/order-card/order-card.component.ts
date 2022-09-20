import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { LocalOrder } from '../../form-order/localOrder';
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
			this.totImportPizzas += pizza[1] * pizza[2];
			this.totQuantityPizzas += pizza[2];
		}
		this.totImportPizzas = parseFloat(this.totImportPizzas).toFixed(2);
	}

	isInstanceOfLocalOrder: boolean;
	ngOnChanges(changes: SimpleChanges): void {
		this.isInstanceOfLocalOrder = this.order instanceof LocalOrder;
	}

	/* VARIABLES */

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

	statusButtonLabel(): string {
		let statusOrderLabel: string = '';
		switch (this.order.status) {
			case 1:
				statusOrderLabel = 'Order received';
				break;
			case 2:
				statusOrderLabel = 'Order is ready';
				break;
			case 3:
				statusOrderLabel = 'Order delivered';
				break;
			default:
				statusOrderLabel = 'Order delivered';
				break;
		}
		return statusOrderLabel;
	}

	deleteOrder() {
		let index = this.getIndexOrder();
		OrderedPizzas.orderedPizzas.splice(index, 1);
	}

	pricePizza(price) {
		return parseFloat(price).toFixed(2);
	}
}
