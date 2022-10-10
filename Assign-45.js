console.log("***Assignment 45***");
var manufacturer_name="Honda"
var model_name="City"
print_cars(manufacturer_name,model_name)
function print_cars(manufacturer_name,model_name)
{
console.log("Manufacturer Name: "+manufacturer_name);
console.log("Model Name: "+model_name);

var car_features = [
  {color:'white', optional: 'power windows'},
  {color:'blue', optional: 'power_steering'},
  {color:'silver', optional: 'turbo'},
];
console.log(Object.values(car_features)[0]);
console.log(Object.values(car_features)[1]);
console.log(Object.values(car_features)[2]); 
} 