import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Butt from './Butt'
import Card from './Card'

function App() {
  return (
    <div>
      <div class="flex justify-center">
        <Butt label="přidat" />
        <Butt label="odebrat" />
      </div>
      <Card />
    </div>
  )
}

export default App
