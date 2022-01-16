import {Department} from "./Department.js";
import {Person} from "./Person.js";
import {PersonRefactoring} from "./PersonRefactoring.js";

let department = new Department("에너지엑스", "이사님");
let person = new Person("조단");
person.department = department;

// 관리자를 알고 싶을 때
console.log("리팩토링 전 : " + person.department.manager);

// 리팩토링
let personRefactoring = new PersonRefactoring("조단", department);
console.log("리팩토링 후 : " + personRefactoring.manager);