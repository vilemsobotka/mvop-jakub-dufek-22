import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Menu from './Menu'
import Header from './Header'
import Part1 from './Part1'
import Center from './Center'
import Last from './Last'

function App() {

  return <div class="grid place-items-center">
    <Menu />
    <Header headline="text"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa maiores voluptatibus optio et nesciunt facilis obcaecati. Accusamus quibusdam dolorum repudiandae unde veritatis iusto, earum quidem repellat, dolor inventore nesciunt."
      button="tlačítko2" />
    <div class="mt-8 flex">
      <Part1 />
      <Part1 />
      <Part1 />
      <Part1 />
    </div>
    <Center />
    <Last />
  </div>
}

export default App
