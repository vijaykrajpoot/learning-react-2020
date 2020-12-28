import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const [text, setText] = useState('value')
  const reset = () => {
    setValue(0)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}></section>
      <h2>regular counter</h2>
      <div className='item'>
        <h3>{text}:</h3>
        <button>
          <h4>{value} </h4>
        </button>
      </div>
      <div>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          {' '}
          increase
        </button>
        {/* <button className='btn' onClick={() => setValue(0)}>
          {' '}
          reset
        </button> */}
        <button className='btn' onClick={reset}>
          {' '}
          reset
        </button>
      </div>
    </>
  )
}

export default UseStateCounter
