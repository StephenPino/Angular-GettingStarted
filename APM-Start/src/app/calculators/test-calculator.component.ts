import { Component } from '@angular/core';

@Component({
    selector: 'test-calculator',
    templateUrl: './test-calculator.component.html',
    styleUrls: ['./test-calculator.component.css'],
})

export class TestCalculatorComponent {

    widthInput: number;
    lengthInput: number;
    calculatedValue: number;

    onFormSubmit(): void {
       this.calculatedValue = this.widthInput * this.lengthInput;
       console.log(this.calculatedValue);
    }
}