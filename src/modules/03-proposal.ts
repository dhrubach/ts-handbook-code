import { IProposal } from './01-proposal.interface';
import { ICustomer } from './02-customer.interface';

export default class Proposal implements IProposal, ICustomer {

	constructor(
		public proposalId: number,
		public clientId: number,
		public name: string,
		public firstName: string,
		public lastName: string,
		public emailId: string,
		public investmentAmount: number) { }

	public displayProposalDetails(): void {
		console.log(`
			Proposal Id: ${this.proposalId}
			Client Id: ${this.clientId}
			Proposal Name: ${this.name}
			Customer Name: ${this.firstName} ${this.lastName}
			Investment Amount: ${this.investmentAmount}
			Email Address: ${this.emailId}
		`);
	}
}
