console.log("***Assignment 15***");
  const friends = ["Rizwan", "Talha", "Tayyab" ];
  var frd_msg = " Please come for the Dinner on 10th Oct ";
  let fLen = friends.length;
  for (let i = 0; i < fLen; i++) {
    console.log(friends[i] +frd_msg);
 }
 console.log(friends[1]+ " won't be able to attend the dinner");
 delete friends[1];
 friends[1]= "Noman ";
 console.log(friends[1]+frd_msg);
