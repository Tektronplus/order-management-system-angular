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

	constructor() {}
	ngOnInit(): void {
		console.log(this.order);
		console.log(this.isInstanceOfLocalOrder);
	}

	isInstanceOfLocalOrder: boolean;
	ngOnChanges(changes: SimpleChanges): void {
		this.isInstanceOfLocalOrder = this.order instanceof LocalOrder;
	}
}
