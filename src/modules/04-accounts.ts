import Proposal from './03-proposal';

class Account extends Proposal {

	public accountNumber: number;
	public address: string;
	public phoneNumber?: string;

	constructor(
		pid: number,
		cid: number,
		pname: string,
		fname: string,
		lname: string,
		email: string,
		balance: number,
		account: number,
		address: string,
		phoneNumber?: string) {
		super(pid, cid, pname, fname, lname, email, balance);
		this.accountNumber = account;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
}

export { Account };
