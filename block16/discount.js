/*

Define a function called applySubscriptionDiscount that takes in a total cost and applies a 25% discount if the customer has a subscription. 
  Return the discounted total.
Define a function called applyCouponDiscount that takes in a total cost and applies a $10 discount if the customer has a coupon. 
  Return the discounted total.
Define a function called calculateTotalCost that takes in a customer object and calculates the total cost of all refills. 
  Start by multiplying the price per refill by the number of refills. 
  Then, if the customer has a subscription, apply the subscription discount. If the customer has a coupon, apply the coupon discount. 
  Return the final total cost.
Define a function called printGrandTotal that takes in a customer object and prints out a message with the final total cost including any discounts. 
  Use the calculateTotalCost function to calculate the total cost first.
Create three customer objects with the required properties.
Call the printGrandTotal function for each of the customer objects.

*/

// Function to apply subscription discount
const applySubscriptionDiscount = (total) => {
  return total * 0.75;
};

// Function to apply coupon discount
const applyCouponDiscount = (total) => {
  return total - 10;
};

// Function to calculate total cost
const calculateTotalCost = (customer) => {
  let refillCost = customer.pricePerRefill * customer.refills;
  let totalCost = refillCost;

  if (customer.subscription) {
    totalCost = applySubscriptionDiscount(totalCost);
  }

  if (customer.coupon) {
    totalCost = applyCouponDiscount(totalCost);
  }

  return totalCost;
};

// Function to print grand total
const printGrandTotal = (customer) => {
  const totalCost = calculateTotalCost(customer);
  console.log(`Your grand total is $${totalCost}.`);
};

// Create customer objects
const timmy = {
  name: "timmy",
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  name: "sarah",
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  name: "rocky",
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// Call printGrandTotal function for each customer
printGrandTotal(timmy);
printGrandTotal(sarah);
printGrandTotal(rocky);
