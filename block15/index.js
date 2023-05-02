const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "JaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipcode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];


delete customer["zipCode"];
delete customer["favoriteStore"];

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(Object.keys(customer));

console.log(customer.cupSize);