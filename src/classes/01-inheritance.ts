/*
 *  Inteface
 *  Class
 *  Class Inheritance
 *      'extends' keyword
 *      access modifiers : public, private, protected
 *      'protected' base class method
 *      contructor --> super
 *      override base class functions
 */

interface IProposal {
	proposalId: number;
	clientId: number;
	name: string;
}

class Proposal implements IProposal {
	public proposalId: number;
	public clientId: number;
	public name: string;

	constructor(pid: number, cid: number, name: string) {
		this.proposalId = pid;
		this.clientId = cid;
		this.name = name;
	}

	protected toString(): void {
		console.log(`
			ProposalId : ${this.proposalId}
			ClientId : ${this.clientId}
			Proposal Name : ${this.name}
		`);
	}
}

class AccountOwner extends Proposal {
	public primaryOwner: string;
	public telephone: string;

	constructor(powner: string, tel: string, proposalObj: IProposal) {
		super(proposalObj.proposalId, proposalObj.clientId, proposalObj.name);
		this.primaryOwner = powner;
		this.telephone = tel;
	}

	public toString(): void {
		super.toString();
		console.log(`
			Primary Owner : ${this.primaryOwner}
			Telephone : ${this.telephone}
		`);
	}
}

const proposal = new AccountOwner('John Smith', '123456', {
	clientId: 56789,
	name: 'test-proposal-100',
	proposalId: 12345 });

proposal.toString();
