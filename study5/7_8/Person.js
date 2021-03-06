export class Person {
    constructor(name, department) {
        this._name = name;
        this._department = department;
    }

    get name() {
        return this._name;
    }

    get manager() {
        return this._department.manager;
    }
}