console.log("***Assignment 44***");
var  items= ["Lettuce","Cucumber","Sauce"]
var sandwich="chicken sandwich"
make_sandwich(sandwich,items);
function make_sandwich(sandwich,items)
{
  console.log(sandwich);
let fLen = items.length;
for (let i = 0; i < fLen; i++)
{ 
  console.log(items[i]);
 }
} 