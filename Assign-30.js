console.log("***Assignment 30***");
  let list_friends = ['rizwan','talha','tayyab','zahid']
  let fLen = list_friends.length;
    for (let i = 0; i < fLen; i++) 
    {
     if(list_friends.includes('admin'))
  {
    console.log("Hello admin, would you like to see a status report?");
  }
  else
  {
    console.log("Hello "+list_friends[i]+" Thank you for logging in again.");
  }
 }