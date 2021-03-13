const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger(); //someone is the lead singer...
leadSinger("Chris Martin") //Chris Martin is the lead singer ...


/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

//My solution:
const groceryShopping = (food = "something") => `I'm going to buy ${food} from the grocery shop.`;

console.log(groceryShopping());
console.log(groceryShopping("milk"));

//Sample answer:
function foodShopping( food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping();