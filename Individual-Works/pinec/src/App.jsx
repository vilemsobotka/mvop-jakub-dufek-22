import Menu from './Menu'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className='mx-52'>
      <div className=' flow-root mt-2'>
        <div className="flex items-center float-left">
          <img className="h-16" src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2015/10/art-of-ping-pong-2015-supermundane-paddle-thumb.jpg?fit=993%2C993&ssl=1" alt="cleba" />
          <div className='font-bold'>stolní <br /> tenis</div>
        </div>
        <div className='flex items-center bg-blue-500 px-12 max-w-min rounded-full float-right mt-5'>
          <Menu target="Home" text="domů" />
          <Menu target="Stuff"text="vybavení" />
          <Menu target="Clubs"text="kluby" />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
