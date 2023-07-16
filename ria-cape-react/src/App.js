import React from 'react';
import ReactDOM from 'react-dom';



const person = {
  name: "ria",
  email: "riarajpal13@",
  age: 0
};
 
const MyComponent =
<UserProfile
name = {person.name}
email = {person.email}
age = {person.age}
/>
function UserProfile({name, email, age})
{
return(
  <div>
    <p> Name: {name}</p>
    <p> Email: {email}</p>
    <p> Age: {age}</p>
  </div>
)
}
function App() {
  
  return <UserProfile name={person.name} email={person.email} age={person.age} /> ;


}

export default App;