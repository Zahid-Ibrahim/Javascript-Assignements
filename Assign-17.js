console.log("***Assignment 17***");
  const friends = ["Rizwan", "Talha", "Tayyab" ];
  var frd_msg = " Please come for the Dinner on 10th Oct ";
  let fLen = friends.length;
  for (let i = 0; i < fLen; i++) {
    console.log(friends[i] +frd_msg);
 }
 console.log("We found a bigger table");
 friends.unshift("Umair");
 friends.push("Waqas");
 friends.splice(2, 0, 'Yaqoob');
 let fLen1 = friends.length;
  for (let i = 0; i < fLen1; i++) {
    console.log(friends[i] +frd_msg);
 }
 console.log("Could not recieve the table. Only two people can sit on the table");
 frd_newmsg=" Welcome to the Dinner"
 let fLen2 = 2;
  for (let i = 0; i < fLen2; i++) {
    console.log(friends[i] +frd_newmsg);
 }
 console.log(friends[2]+" Sorry no Space");
 console.log(friends[3]+" Sorry no Space");
 console.log(friends[4]+" Sorry no Space");
 console.log(friends[5]+" Sorry no Space");
