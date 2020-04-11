import { Month } from "./Month";

export class Expense extends Month {
    constructor(expenseName, value, month) {
        super(month);
        this.expenseName = expenseName;
        this.value = this.SetValue(value);
    }

    SetValue(value) {
        const valueStrArr = value.split(" ");
        const desiredIndex = valueStrArr[1].replace(/\./g, "");
        const finalValue = desiredIndex.replace(",", ".");
        return parseFloat(finalValue);
    }

    GetValue() {
        return this.value;
    }

    GetExpenseName() {
        return this.expenseName;
    }
}
