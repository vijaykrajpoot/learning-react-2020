import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const incrementMe = (value) => {
    setValue(value + 1)
  }
  console.log('Rendering start!!')
  useEffect(() => {
    console.log('Use Effect called once after rendering')
    if (value > 0) {
      document.title = `New Value: ${value}`
    }
  })
  console.log('Rendering done!!!')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => incrementMe(value)}>
        Increment
      </button>
      <button className='btn' onClick={() => incrementMe(value - 1 - 1)}>
        Decrement
      </button>
    </>
  )
}

export default UseEffectBasics
