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
  proposalId: number;
  clientId: number;
  name: string;

  constructor(pid: number, cid: number, name: string) {
    this.proposalId = pid;
    this.clientId = cid;
    this.name = name;
  }

  protected toString(): void {
    console.log(`ProposalId : ${this.proposalId}`);
    console.log(`ClientId : ${this.clientId}`);
    console.log(`Proposal Name : ${this.name}`);
  }
}

class AccountOwner extends Proposal {
  primaryOwner: string;
  telephone: string;

  constructor(powner: string, tel: string, proposalObj: IProposal) {
    super(proposalObj.proposalId, proposalObj.clientId, proposalObj.name);
    this.primaryOwner = powner;
    this.telephone = tel;
  }

  toString(): void {
    super.toString();
    console.log(`Primary Owner : ${this.primaryOwner}`);
    console.log(`Telephone : ${this.telephone}`);
  }
}

const proposal = new AccountOwner('John Smith', '123456', {
  proposalId: 12345,
  clientId: 56789,
  name: 'test-proposal-100'
});

proposal.toString();
