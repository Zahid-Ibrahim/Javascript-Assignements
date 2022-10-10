  console.log("***Assignment 32***");
    let current_users = ['rizwan','talha','tayyab','zahid']
    let new_users = ['noman','talha','umair','zahid']

    let fLen = new_users.length;
    for (let i = 0; i < fLen; i++)
    {
      if(new_users[i].toString()===current_users.toString())

      {
        console.log("Sorry "+new_users[i]+" Name has already taken");
      }
      else
      {
       console.log("Great "+new_users[i]+" is still available.");
      }
     }