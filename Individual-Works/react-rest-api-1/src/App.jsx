import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'



function App() {
  const [count, setRoad] = useState(0)
  axios.defaults.headers.common['x-access-token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZmVramFrQGdtYWlsLmNvbSIsImlkIjoxNjQ1LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NzQ0NzU0NDQsImV4cCI6MTE2NzQ0NzU0NDQsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJmN2VkNGM0YS1lMWEyLTRkYjQtYTU1YS1mYmU1NjY3YjQxOTIifQ.Vuh0Nq5sf-QfHyx2DS9135tSh_HVOXrvnkYaNRhtnqM"
  useEffect(()=>{
    getRoad();
  }, )
  async function getRoad() {
    try {
      const response = await axios.get("https://api.golemio.cz/v2/gtfs/routes?limit=30");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  return (
  <>chleba</>
  )
}
}

export default App
