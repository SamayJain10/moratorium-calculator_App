export class Calculator {
    calculateInterest(
        loanAmount: number,
        loanTenure: number,
        interestRate: number,
        emisPaid: number,
        interestOption: string,
        moratoriumMonths: number
    ): number {
        let interestOverdue = 0;

        if (interestOption === 'option1') {
            interestOverdue = (loanAmount * (interestRate / 100 / 12)) * moratoriumMonths;
        } else if (interestOption === 'option2') {
            interestOverdue = (loanAmount * Math.pow((1 + interestRate / 100 / 12), moratoriumMonths)) - loanAmount;
        }

        return interestOverdue;
    }
}
