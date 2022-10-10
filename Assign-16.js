console.log("***Assignment 16***");
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