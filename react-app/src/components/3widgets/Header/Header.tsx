import React from 'react'
import { useState } from 'react'

function Header() {
    const [value, setValue]= useState<string | number | null>("")
    console.log(value)
    function handeValue(event :React.ChangeEventHandler<HTMLInputElement> ):void{
        setValue(event.target.value)
    }

  return (
    <header className='header'>
        <h2>Hello</h2>
        <input className='header__input' type="text" value={value} onChange={handeValue}/>
    </header>
  )
}

export default Header