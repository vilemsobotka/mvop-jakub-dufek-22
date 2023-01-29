import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Grid from './Grid'


function App() {
  const [route, setRoute] = useState(null)
  axios.defaults.headers.common['x-access-token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZmVramFrQGdtYWlsLmNvbSIsImlkIjoxNjQ1LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NzQ0NzU0NDQsImV4cCI6MTE2NzQ0NzU0NDQsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJmN2VkNGM0YS1lMWEyLTRkYjQtYTU1YS1mYmU1NjY3YjQxOTIifQ.Vuh0Nq5sf-QfHyx2DS9135tSh_HVOXrvnkYaNRhtnqM"
  
  async function getRoad() {
     await axios.get("https://api.golemio.cz/v2/gtfs/routes?limit=30")
      .then((response) => {
        setRoute(response.data);
        console.log(response);
      });
  }
  useEffect(() => {
    getRoad();
  },)
  return (
    <div>
      {route ? (<Grid route={route}></Grid>) : <div>loading...</div>}
    </div>
  )
}


export default App
