console.log("***Assignment 3***");
 var name2 = "Zahid ibrahim";
 name3 = name2.toLowerCase();
 name4 = name2.toUpperCase();
 name5 = name2.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
 console.log(name3);
 console.log(name4); 
 console.log(name5);
