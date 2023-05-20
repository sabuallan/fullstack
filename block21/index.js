// Step 1: Define a constructor function called Car.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Step 2: Add a getDescription method to the Car prototype.
Car.prototype.getDescription = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Step 3: Define the ElectricCar function as a subclass of Car.
function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}

// Step 4: Override the getDescription method of the ElectricCar prototype.
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.getDescription = function () {
  return `${Car.prototype.getDescription.call(this)}, Range: ${
    this.range
  } miles`;
};

// Step 5: Create an instance of ElectricCar and call the getDescription method.
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
const description = myElectricCar.getDescription();

// Step 6: Print the description to the console.
console.log(description);
