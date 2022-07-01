import React from 'react'

const InputColor = ({color,setColor}) => {
  return (
    <form className='form'>
        <input placeholder='Enter Color Name' value={color} onChange = { (e) => {
            setColor(e.target.value);
        }} />
    </form>
  )
}

export default InputColor