import React, { ReactElement, useState } from 'react'
import Header from '../3widgets/Header/Header'
import MainComponent from '../3widgets/Main/MainComponent'
import "./style.scss"
 function App() {
   const [value, setValue]= useState<string>("")
    console.log(value)
    function handeValue(event :React.ChangeEventHandler<HTMLInputElement> ):void{
        setValue(event.target.value)
    }

  return (<>
    <header className='header'>
        <h2>Hello</h2>
        <input className='header__input' type="text" value={value} onChange={handeValue}/>
    </header>
    <MainComponent request={value}/>
    </>
  )
}

export default App