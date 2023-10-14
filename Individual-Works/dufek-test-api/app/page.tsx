"use client"
import * as React from 'react';
import handleClick from "../library/handleClick";
export default function Home() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [stext, setStext] = React.useState("");

  if (isClicked) {
    setIsClicked(false)
    React.useEffect(() => { 
      const data = handleClick(stext)
      handleClick(stext) 
      return data
    })
    return (

      <div>
        {data}
      </div>
    )
  }

  return (
    <div>
      <h1>hledejte ip adresu</h1>
      <input onChange={(e) => setStext(e.target.value)} type="text" className="border border-gray-300" />
      <div>
        <button onClick={() => { setIsClicked(true) }}>vyhledat</button>
      </div >

    </div>
  )
}
