export class Person {
    _name;
    _department;

    constructor(name) {
        this._name = name;
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