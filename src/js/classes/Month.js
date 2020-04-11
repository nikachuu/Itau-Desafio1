import { monthsByName } from "../utils/monthsByName";

export class Month {
    constructor(month) {
        this.month = { 
            byNumber: parseInt(month),
            byName: monthsByName[parseInt(month)]
        }
    }
  
    GetMonthByNumber() {
        return this.month.byNumber;
    }

    GetMonthByName() {
        return this.month.byName;
    }
}
