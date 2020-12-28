import React, { useState } from 'react'

const UseStateObject = () => {
  // you can define an object and its attributes and used it in whole componenet
  // const [person, setPerson] = useState({
  //   name: 'vijay',
  //   age: 24,
  //   message: 'random mesage',
  // })

  //Define each attribute as independent const and refere by them name  instead of person.xxx
  const [name, setName] = useState('vijay')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Random Message')
  //  console.log(person)
  const changeMessage = () => {
    // Instead of using person set value direct to attribute.
    setMessage('This is an updated message')
    //...person-> reman person object as it is except message attribute
    //    setPerson({ ...person, message: 'Hello word' })
  }

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      {/* refere as object with . notation */}
      {/* <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2> */}
      <button className='btn' onClick={changeMessage}>
        changeMessage
      </button>
    </>
  )
}

export default UseStateObject
