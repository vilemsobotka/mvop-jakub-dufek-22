import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './Post'

async function makeRequest(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function App() {
  const [isPost, setisPost] = useState(false)


  return (
    <div>
      <button className="bg-red-600 text-white" onClick={() => setisPost(!isPost)}>post</button>
      {isPost ? <Post /> : null}

    </div>
  )
}

export default App
