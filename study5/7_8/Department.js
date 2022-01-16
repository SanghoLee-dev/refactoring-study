export class Department {
    _chargeCode;
    _manager;

    constructor(chargeCode, manager) {
        this._chargeCode = chargeCode;
        this._manager = manager;
    }

    get chargeCode() {
        return this._chargeCode;
    }

    set chargeCode(value) {
        this._chargeCode = value;
    }

    get manager() {
        return this._manager;
    }

    set manager(value) {
        this._manager = value;
    }
}