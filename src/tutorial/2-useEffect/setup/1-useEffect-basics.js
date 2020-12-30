import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  console.log('Rendering start!!')
  useEffect(() => {
    console.log('Use Effeect called once after rendering')
  })
  console.log('Rendering done!!!')
  return <h1>Use Effect Basis</h1>
}

export default UseEffectBasics
