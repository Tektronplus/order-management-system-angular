export class TakeAwayOrder {
	id: number;
	firstNameClient: string;
	lastNameClient: string;
	addressClient: string;
	phoneNumber: string;
	pizzasOrdered: Array<any>;

	constructor(
		id,
		firstNameClient,
		lastNameClient,
		addressClient,
		phoneNumber,
		pizzasOrdered
	) {
		this.id = id;
		this.firstNameClient = firstNameClient;
		this.lastNameClient = lastNameClient;
		this.addressClient = addressClient;
		this.phoneNumber = phoneNumber;
		this.pizzasOrdered = pizzasOrdered;
	}
}
