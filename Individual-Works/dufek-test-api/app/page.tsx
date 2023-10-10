"use client"
import { useState } from "react"
export default async function Home() {
  const [stext, setStext] = useState();
  let url = "https://ipapi.co/" + stext + "/json/"
  const getIp = await fetch(url)
  const ip = await getIp.json()
  console.log(ip)
  return (
    <>
      <h1>nadpis</h1>
  <input type="text" id="searchText" name="fname" className="border border-gray-300"/>
    </>
  )
}
