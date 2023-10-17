"use client"
import * as React from 'react';
import handleClick, { IP } from "../library/handleClick";
export default function Home() {
  const [data, setData] = React.useState<IP>();
  const [stext, setStext] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <div>
      <h1>hledejte ip adresu</h1>
      <input onChange={(e) => setStext(e.target.value)} type="text" className="border border-gray-300" />
      <div>
        <button onClick={async () => {
          setIsLoading(true)
          setData(await handleClick(stext))
          setIsLoading(false)
        }}>vyhledat</button>
      </div >
      {isLoading ? <div>loading</div> : null}
      {data? <div>
        {data.ip}
          </div>: null}
    </div>
  )
}
