//function declaration
function breakfastMenu() {
    return "I'm going to have eggs for my breakfast.";
}

//anonymous function
const show = function() {
    return "I'm going to have pizza for lunch.";
}

//Arrow function
//no need for return when one line
const dinnerMenu = food => `I'm going to eat ${food} for dinner.`;

console.log(dinnerMenu("Chicken Salad"));