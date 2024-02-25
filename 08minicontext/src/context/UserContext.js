// context = card,products,login

import React from 'react';


// UserContext is like global variable
const UserContext = React.createContext()

export default UserContext




//  it have a provider
// example  usercontext wrap all like this 
// All inside components take the acess of all states through UserContext  

{/* <UserContext>
 <Login/>
 <Card>
    <Data/>
<Card/>
<UserContext/> */}