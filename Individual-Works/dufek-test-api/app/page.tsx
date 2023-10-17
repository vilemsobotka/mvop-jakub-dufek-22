"use client"
import * as React from 'react';
import handleClick from "../library/handleClick";
export default function Home() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [stext, setStext] = React.useState("");


  return (
    <div>
      <h1>hledejte ip adresu</h1>
      <input onChange={(e) => setStext(e.target.value)} type="text" className="border border-gray-300" />
      <div>
        <button onClick={() => { handleClick(stext) }}>vyhledat</button>
      </div >

    </div>
  )
}
