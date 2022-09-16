export class LocalOrder {
	id: number;
	numberTable: string;
	pizzasOrdered: Array<any>;

	constructor(id, numberTable, pizzasOrdered) {
		this.id = id;
		this.numberTable = numberTable;
		this.pizzasOrdered = pizzasOrdered;
	}
}
