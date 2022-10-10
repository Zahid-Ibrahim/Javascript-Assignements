console.log("***Assignment 43***");
var magician_name = ["David","Lance","Mark"]
show_magician(magician_name);
make_great(magician_name);
show_magician(magician_name);

function show_magician(magician_name)
{
let fLen = magician_name.length;
for (let i = 0; i < fLen; i++)
{ 
  console.log(magician_name[i]);
 }
}
 function make_great(magician_name)
{
let fLen = magician_name.length;
for (let i = 0; i < fLen; i++)
{ 
  console.log(magician_name[i]+" The Great");
 }
}