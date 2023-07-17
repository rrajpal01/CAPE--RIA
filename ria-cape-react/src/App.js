import React from 'react';
import ReactDOM from 'react-dom';




const person = [
  {
    name: "John",
    email: "john@example.com",
    age: 20
  },
  {
    name: "Jane",
    email: "jane@example.com",
    age: 30
  },
  {
    name: "Jack",
    email: "jack@example.com",
    age: 40
  }
 ]
 
 
// const MyComponent =
// <UserProfile
// name = {person.name}
// email = {person.email}
// age = {person.age}
// />
// function UserProfile({name, email, age})
// {
// return(
//   <div>
//     <p> Name: {name}</p>
//     <p> Email: {email}</p>
//     <p> Age: {age}</p>
//   </div>
// )
// }
function App() {
  
  return (
    <>
    {person.map(function(person) {
      return (
        <div key={person.id}>
          <p> Name: {person.name}</p>
          <p> Email: {person.email}</p>
          <p>Age : {person.hackathons}</p>

        </div>
      )
    })}
    </>

  )
}

export default App;