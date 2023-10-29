import React, { ReactElement } from 'react'
import Header from '../3widgets/Header/Header'
import MainComponent from '../3widgets/Main/MainComponent'
import "./style.scss"
 function App() {
  return <div className="container">
  <Header />
  <MainComponent/>
  </div>
}

export default App