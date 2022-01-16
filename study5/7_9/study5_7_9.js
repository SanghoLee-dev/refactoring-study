function foundPeople(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Don") {
            return "Don";
        }

        if (people[i] === "John") {
            return "John";
        }

        if (people[i] === "Kent") {
            return "Kent";
        }
    }

    return "";
}

console.log(foundPeople(["Beak", "Don", "Emily"]));
console.log(foundPeople(["Beak", "Emily"]));
console.log(foundPeople(["Kent", "Don", "Emily"]));

// 리팩토링

function foundPeopleApi(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(value => candidates.includes(value)) || "";
}

console.log(foundPeopleApi(["Beak", "Don", "Emily"]));
console.log(foundPeopleApi(["Beak", "Emily"]));
console.log(foundPeopleApi(["Kent", "Don", "Emily"]));