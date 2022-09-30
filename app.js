// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}

let mexicanFood = findMexicanFood();
console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
function findVegetarianFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Vegetarian") {
      return true;
    } else {
      return false;
    }
  });
  return results;
}

let vegetarianFood = findVegetarianFood();
console.log("Vegetarian Foods: ", vegetarianFood);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function findItalianFive() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Italian" && el.servings > 5) {
      return true;
    } else {
      return false;
    }
  });
  return results;
}

let ItalianFood = findItalianFive();
console.log("Italian Foods with more than 5 servings: ", ItalianFood);


//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
function findIdAndServings() {
  let results = dishes.filter(function (el) {
    if (el.id === el.servings) {
      return true;
    } else {
      return false;
    }
  });
  return results;
}

let idEqualsServings = findIdAndServings();
console.log("Dishes where id equals servings: ", idEqualsServings);


//4. Create a function that will return only dishes whose serving count is even.
//Filter
function findEvenServings() {
  let results = dishes.filter(function (el) {
    if (el.servings%2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  return results;
}

let evenServings = findEvenServings();
console.log("Dishes where servings are an even number: ", evenServings);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
function findTomatoCheeseDishes() {
  let results = dishes.filter(function (el) {
    if (el.ingredients.includes("tomato") && el.ingredients.includes("cheese")) {
      return true;
    } else {
      return false;
    }
  });
  return results;
}

let tomatoCheeseDishes = findTomatoCheeseDishes();
console.log("Dishes made of tomato and cheese: ", tomatoCheeseDishes);

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

function allCuisineTypes(dishes){
  let cuisineTypes = dishes.map(function(dish){
    return dish.cuisine;
  })

  let duplicateNames = [];
  let cuisineTypesNoDuplicates = cuisineTypes.filter(function(cuisineName){
    if (!duplicateNames.includes(cuisineName)){
      duplicateNames.push(cuisineName);
      return true;
    }
  })

  return cuisineTypesNoDuplicates;
}

let cuisineTypes = allCuisineTypes(dishes);
console.log(cuisineTypes);



//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function adjectiveNames(dishes){
  let newArray = dishes.map(function(oneDish){
    return `${oneDish.cuisine} ${oneDish.name}`;
  })
  return newArray;
}

let adjectiveNamesArray = adjectiveNames(dishes);
console.log(adjectiveNamesArray);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function findVegetarianDishes(dishes){
  let vegetarianDishes = dishes.filter(function(dish){
    if (dish.cuisine === "Vegetarian"){
      return true;
    }
  })
  let vegetarianDishesWithAdjective = vegetarianDishes.map(function(dish){
    let newDish = dish;
    let newName = `${newDish.cuisine} ${newDish.name}`;
    newDish.name = newName;
    return newDish;
  })
  return vegetarianDishesWithAdjective;
}

let vegetarianDishesWithAdjective = findVegetarianDishes(dishes);
console.log(vegetarianDishesWithAdjective);

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function dishesWithChickpeas(dishes){
  let newArray = dishes.filter(function(dish){
    return dish.ingredients.includes("chickpea");
  })
  return newArray;
}

let chickpeaDishes = dishesWithChickpeas(dishes);
console.log(chickpeaDishes);

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop. NOT WORKING!!!!!!!!!

function findTotalServings(dishes){ 
  let initialValue = 0;

  let totalServings = dishes.reduce((total, currentDish) => {
    return (currentDish.servings + total);
  }, initialValue);
  
  return totalServings;
}

let totalServings = findTotalServings(dishes);
console.log(`Total servings = ${totalServings}`);

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function uniqueCuisines(dishes){
  let dishesNoDuplicates = dishes.filter(function(dish){
    //count how many times a cuisine name comes up
    counter = 0;
    for(let key in dishes){
      if (dishes[key].cuisine === dish.cuisine){
        counter += 1;
      }

    }
    if (counter === 1){
      return true;
    } else{
      return false;
    }
  })
  return dishesNoDuplicates;
}

let noDuplicateCuisines = uniqueCuisines(dishes);
console.log(noDuplicateCuisines);
