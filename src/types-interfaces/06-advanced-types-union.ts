enum BeneficiaryType {
	Son,
	Daughter,
	Spouse }

interface IPrimaryOwner {
	name: string;
	email: string;
	phoneNumber: string;
}

interface IBeneficiary {
	name: string;
	email: string;
	type: BeneficiaryType;
}


function displayAccountOwnerDetails(signatory: IPrimaryOwner | IBeneficiary): void {
	console.log(`
		Signatory Name : ${signatory.name}
		Signatory Email : ${signatory.email}
	`);
}

const primaryOwner: IPrimaryOwner = {
	name: 'John Doe',
	email: 'test@union.com',
	phoneNumber: '345-123-123'
};

displayAccountOwnerDetails(primaryOwner);
