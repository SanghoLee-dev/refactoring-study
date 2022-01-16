export class PersonRefactoring {
    _name;
    _department;

    constructor(name, department) {
        this._name = name;
        this._department = department;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }
}