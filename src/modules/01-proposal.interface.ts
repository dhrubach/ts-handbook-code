interface IProposal {
	proposalId: number;
	clientId: number;
	name: string;
	displayProposalDetails(): void;
}

export { IProposal };
