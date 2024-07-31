import { Calculator } from './Calculator';

export class UI {
    private loanAmountInput: HTMLInputElement;
    private loanAmountRange: HTMLInputElement;
    private calculateButton: HTMLButtonElement;
    private interestOverdueElement: HTMLElement;
    private selectedMonthsElement: HTMLElement;
    private calculator: Calculator;

    constructor() {
        this.loanAmountInput = document.getElementById('loanAmount') as HTMLInputElement;
        this.loanAmountRange = document.getElementById('loanAmountRange') as HTMLInputElement;
        this.calculateButton = document.querySelector('button[type="button"]') as HTMLButtonElement;
        this.interestOverdueElement = document.querySelector('.interest-overdue-value') as HTMLElement;
        this.selectedMonthsElement = document.getElementById('selectedMonths') as HTMLElement;
        this.calculator = new Calculator();
    }

    init() {
        this.addEventListeners();
        this.toggleActiveState('interestOption');
        this.toggleActiveState('moratoriumMonths');
    }

    private addEventListeners() {
        this.loanAmountRange.addEventListener('input', this.updateLoanAmountInput.bind(this));
        this.loanAmountInput.addEventListener('input', this.updateLoanAmountRange.bind(this));
        this.calculateButton.addEventListener('click', this.calculateInterest.bind(this));
    }

    private toggleActiveState(groupName: string) {
        const buttons = document.querySelectorAll(`input[name="${groupName}"]`) as NodeListOf<HTMLInputElement>;
        buttons.forEach(button => {
            button.addEventListener('change', (e) => {
                buttons.forEach(btn => {
                    const parent = btn.parentNode as HTMLElement;
                    if (parent) {
                        parent.classList.remove('active');
                    }
                });
                const target = e.target as HTMLInputElement;
                const parent = target.parentNode as HTMLElement;
                if (parent) {
                    parent.classList.add('active');
                }
                if (groupName === 'moratoriumMonths') {
                    this.selectedMonthsElement.textContent = target.id.replace('month', '');
                }
            });
        });
    }

    private updateLoanAmountInput() {
        const loanAmount = this.loanAmountRange.value;
        const formattedLoanAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Number(loanAmount));
        this.loanAmountInput.value = formattedLoanAmount;
    }

    private updateLoanAmountRange() {
        const loanAmount = this.loanAmountInput.value.replace(/,/g, '');
        this.loanAmountRange.value = loanAmount;
    }

    private calculateInterest() {
        const loanAmount = parseFloat(this.loanAmountInput.value.replace(/,/g, ''));
        const loanTenure = parseInt((document.getElementById('loanTenure') as HTMLInputElement).value);
        const interestRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
        const emisPaid = parseInt((document.getElementById('emisPaid') as HTMLInputElement).value);
        const interestOption = (document.querySelector('input[name="interestOption"]:checked') as HTMLInputElement).id;
        const moratoriumMonths = parseInt((document.querySelector('input[name="moratoriumMonths"]:checked') as HTMLInputElement).id.replace('month', ''));

        const interestOverdue = this.calculator.calculateInterest(loanAmount, loanTenure, interestRate, emisPaid, interestOption, moratoriumMonths);

        this.interestOverdueElement.textContent = `₹ ${interestOverdue.toFixed(2)}`;
    }
}
