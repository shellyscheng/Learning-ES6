let contacts = ["Mary", "Joel", "Danny"];

//...: copy the elements of the array
let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("John");


let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);