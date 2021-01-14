// // Create a variable that holds your favorite sandwich name
// let favoriteSandwich = "blt"


// // Create an object that represents your least favorite sandwich. The object should have properties for sandwich name (a string), price (a number) and ingredients (an array)
// let leastFavoriteSandwich = {
//     name: "tuna",
//     price:  7.99,
//     ingredients: ["bread", "tunaSalad", "lettuce"]
// };

// console.log(leastFavoriteSandwich["name"])
// console.log(leastFavoriteSandwich.price)
// console.log(leastFavoriteSandwich.ingredients[0])

// // Create an array of objects that represent a menu at a sandwich restaurant. You should have at least three objects in the array. One of them should be an object that represents your favorite sandwich, one of them should be the object you created in step 2 (least fave sandwich) and one of them should be a third sandwich of your choice. They should all have the same properties that you created in step 2.
// let menu = [
//     {
//     name: "tuna",
//     price:  7.99,
//     ingredients: ["bread", "tunaSalad", "lettuce"]
// },
// {
//     name: "blt",
//     price:  10.99,
//     ingredients: ["bread", "bacon", "lettuce", "tomato"]
// },
// {
//     name: "ham",
//     price:  6.99,
//     ingredients: ["bread", "ham", "lettuce", "cheese", "mayo", "pickles"]
// }
// ];

// // this will give me the entire ham sandwich
// console.log(menu[2])
// // this will get me inside the object of ham sandwich and only give me the name
// console.log(menu[2].name)
// // this will get me into a specific item in the ingredient list
// console.log(menu[2].ingredients[3])

// //loop within a loop
// // for (let i = 0; i < menu.length; i++) {
// //     // console.log("this is i", i)
// //     console.log(menu[i])
// //     console.log(menu[i].name)//prints the name of the sandwich
// //     for (let j=0; j< menu[i].ingredients.length;j++){
// //         console.log(menu[i].ingredients[j])
// //     }
// // }

// //you could let bltIngredients = menu[1].ingredients and then use this in place of it below

// //write a for loop that prints each ingredient for a blt
// for (let i = 0; i < menu[1].ingredients.length; i++) {
//     console.log(menu[1].ingredients[i])
// }

// for (let i=0; i < menu.length; i++){
//     if(menu[i].name ===favoriteSandwich){
//         console.log("CHEF'S CHOICE", menu[i].name)
//     } else {
//         console.log(menu[i].name)
//     }
// }

// // console.log(menu[i].price)

// // Write a conditional that checks the price of each sandwich. If the price is under ten dollars, print SALE before the name of the sandwich. Otherwise, print the name of the sandwich just like normal
// for(let i = 0; i < menu.length; i++){
//     if(menu[i].price < 10){
//         console.log("SALE", menu[i].name)// this is the same thing console.log(`SALE ${menu[i].name} - ${menu[i].price}`)
//     }else {
//         console.log(menu[i].name)
//     }
    
//   }


// //write a function that takes in the name of my franchise ownder and returns an array of menu items with that person's name tacked onto the beginning
// function createFranchiseMenu(franchiseOwnerName){
//     let franchiseMenuArray = [];
//     console.log("this franchise belong to:", franchiseOwnerName);


//     //loop over menu array
//     for(let i=0; i < menu.length; i++)

//     //modify every sandwich name to include franchise owners name
//     let currentSandwich = menu[i]
//     let currentName = currentSandwich.name

//     //object for new sandwich menu
//     let newSandwich ={
//         name: `${franchiseOwnerName}'s ${currentSandwichName}`
//     }


//     //push it into the new franchise menu
//     franchiseMenuArray.push(newSandwich)


//     return franchiseMenuArray;
// }

// // call the function

// let vincentMenu = createFranchiseMenu("Vincent")
// let angieMenu = createFranchiseMenu("Angie")
// let mandyMenu = createFranchiseMenu("Mandy")

// console.log(vincentMenu)



let favoriteSandwich = "Rueben";

let leastFavoriteSandwich = {
  sandwichName: "Mud sandwich",
  price: 11.99,
  ingredients: ["bread", "mud", "mustard"],
};

console.log(leastFavoriteSandwich.ingredients[0]);

let menu = [
  {
    sandwichName: "Tomato sandwich",
    price: 6.99,
    ingredients: ["bread", "mayo", "tomato", "salt and pepper"],
  },
  leastFavoriteSandwich,
  {
    sandwichName: "Rueben",
    price: 9.99,
    ingredients: [
      "bread",
      "corned beef",
      "saurkraut",
      "thousand island dressing",
    ],
  },
];

// let ruebenIngredients = menu[2].ingredients;
// console.log("this is rueben ingredietns", ruebenIngredients)
// // Loop through ingredients for just a rueben
// for(let i = 0; i < ruebenIngredients.length; i++){
//     console.log(ruebenIngredients[i])
// }

// // Loop through all the sandwiches
// for(let i = 0; i < menu.length; i++){
//     console.log("this is i", i)
//     console.log(menu[i].sandwichName)
//     // console.log(menu[i].ingredients)
//     for(let j = 0; j < menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
// }

// console.log(menu[2].sandwichName)
// console.log(menu[2].ingredients[1]) // corned beef

// for(let i = 0; i < menu.length; i++){
//     if(menu[i].sandwichName === favoriteSandwich){
//         console.log("CHEF'S CHOICE", menu[i].sandwichName)
//     } else {
//         console.log(menu[i].sandwichName)
//     }

// }

// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].price < 10) {
//     console.log(`SALE ${menu[i].sandwichName} - ${menu[i].price}`);
//   } else {
//     console.log(menu[i].sandwichName);
//   }
// }

// Write a function that takes in the name of my franchise owner and returns an array of menu items with that person's name tacked onto the beginning

function createFranchiseMenu(franchiseOwnerName) {
  let franchiseMenuArray = [];
  console.log("This franchise belongs to:", franchiseOwnerName);
  //Loop over the menu array
  for (let i = 0; i < menu.length; i++) {
    // Modify every sandwich name to include the franchise owner's name
    let currentSandwichObject = menu[i];
    let currentSandwichName = currentSandwichObject.sandwichName;
    // Object for new sandwich menu
    let newSandwich = {
      sandwichName: `${franchiseOwnerName}'s ${currentSandwichName}`
    }
    // Push it into the new franchise menu
    franchiseMenuArray.push(newSandwich)
  }

//   console.log(franchiseMenuArray)
  return franchiseMenuArray;
}


// Call the function
let vincentMenu = createFranchiseMenu("Vincent");
let angieMenu = createFranchiseMenu("Angie");
let mandyMenu = createFranchiseMenu("Mandy");
let thomasMenu = createFranchiseMenu("Thomas");

console.log(vincentMenu)




// Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."
for (let i = 0; i < menu.length; i++) {
    console.log(`The ${menu[i].sandwichName} is ${menu[i].price}.`)
}

// Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. 

//The function should build an object that represents a sandwich 
//and add it to the array.
function addToMenu(sandwichName, price, ingredients){
    let newSandwich = {
            name: sandwichName,
            price:  price,
            ingredients: ingredients
        };
    
    menu.push(newSandwich)
}

addToMenu("bbq", 5.99, ["pulled pork", "bbq sauce"])
addToMenu("chicken", 10.99, ["chicken", "cheese", "lettuce"])
console.log(menu)



// Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.
// // for (let i = 0; i < menu.length; i++) {
// //     console.log(menu[i].price * 25%)
            // let discountSandwiches
// // }

// function percentage (number, per){
//     return (menu[i].price/25)*per;
// }
// // return discountSandwiches;








// 1. Write a "Dairy Free" function -CHECKK
// 2. that loops through your array of sandwiches - CHECKKK
// 3. and returns a new array of sandwiches
// 4. that do NOT include cheese in their ingredient list.
//(Make sure you have at least one sandwich with cheese so you can test if this function works.)

function dairyFree() {
  // Somewhere in here I need an if/else statement to ask if there is cheese
  let cheeseFreeSandwiches = [];
  for (let i = 0; i < menu.length; i++) {
    let ingredientsForThisSandwich = menu[i].ingredients

    if (ingredientsForThisSandwich.includes("cheese")=== false) {
      cheeseFreeSandwiches.push(menu[i])
    }

  }
  return cheeseFreeSandwiches;
}

let dairyFreeMenu = dairyFree(); // Expected output: we should see logs that say mud and tomato do not include cheese, and rueben DOES

console.log("dairy free menu", dairyFreeMenu)


//this is something else i was trying.
// for (let i = 0; i < menu[ingredients].length; i++) {
//     console.log(menu.ingredients[i])
//     if(menu.ingredients[i] === "cheese"){
//         console.log(`${sandwichName}, "Contains Dairy Products"`)
//     }else { 
//         console.log(`${sandwichName}, "DAIRY FREE"`)
//     }
// } 