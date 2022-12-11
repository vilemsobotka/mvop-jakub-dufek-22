import React, { useState } from 'react'
import './App.css'
import Butt from './Butt'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([]);
  
  return (
    <div>
      <div class="flex justify-center">
        <Butt label="přidat" exec={() => setCount(cards.push(<Card index={cards.length + 1} key={cards.length + 1}/>))} />
        <Butt label="odebrat" exec={() => setCount(cards.pop())} />
      </div>
      <div class="grid grid-cols-4">
        {cards.map((card) => { return (card) })}
        </div>
    </div>
  )
}

export default App
