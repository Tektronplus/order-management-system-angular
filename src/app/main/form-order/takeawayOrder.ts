export class TakeAwayOrder {
	id: number;
	firstNameClient: string;
	lastNameClient: string;
	addressClient: string;
	phoneNumberClient: string;
	pizzasOrdered: Array<any>;

	constructor(
		id,
		firstNameClient,
		lastNameClient,
		addressClient,
		phoneNumberClient,
		pizzasOrdered
	) {
		this.id = id;
		this.firstNameClient = firstNameClient;
		this.lastNameClient = lastNameClient;
		this.addressClient = addressClient;
		this.phoneNumberClient = phoneNumberClient;
		this.pizzasOrdered = pizzasOrdered;
	}
}
