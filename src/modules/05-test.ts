import { Account } from './04-accounts';

const account =
	new Account(
		1001,
		1234,
		'Proposal-Test-100',
		'Bilbo',
		'Baggins',
		'test@email.com',
		1234.567,
		987665,
		'100 Mango Lane',
		'123-456-6789');

account.displayProposalDetails();
