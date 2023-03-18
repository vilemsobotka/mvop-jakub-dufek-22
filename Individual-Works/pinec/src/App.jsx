import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './Menu'

function App() {

  return (
    <div className='mx-52'>
      <div className=' flow-root mt-2'>
        <div className="flex items-center float-left">
          <img className="h-16" src="https://i0.wp.com/coolhunting.com/wp-content/uploads/2015/10/art-of-ping-pong-2015-supermundane-paddle-thumb.jpg?fit=993%2C993&ssl=1" alt="cleba" />
          <div className='font-bold'>stolní <br /> tenis</div>
        </div>
        <div className='flex items-center bg-blue-500 px-12 max-w-min rounded-full float-right mt-5'>
          <Menu text="domů" />
          <Menu text="vybavení" />
          <Menu text="hráči" />
        </div>
      </div>
      <div className=' mx-32 mt-16'>
        <div className='flex items-center'>
          <div className='mr-16'>
            <h1 className='text-2xl font-bold'>STOLNÍ TENIS</h1>
            <p className='mt-4'>
              Stolní tenis, také nazývaný ping pong, je rychlá a soutěživá sportovní hra, která se hraje na speciálním stole s pálkami a míčkem.
              Hráči se snaží dosta míček přes stůl na stranu soupeře tak, aby jej nedokázal vrátit zpět.
              Hra se hraje jako singl, a nebo jako debl, kde hráči v odehrávání střídají.
              Stolní tenis je populární po celém světě a může být hrán jako rekreační aktivita nebo jako profesionální sport s mezinárodními turnaji a mistrovstvími světa.
            </p>
          </div>
          <img className='rounded-3xl w-96' src="https://1gr.cz/fotky/idnes/17/012/cl5/ROU68afcc_pansk.jpg" alt="not found" />
        </div>
        <h2 className='text-2xl font-bold'>STRUČNÁ PRAVIDLA</h2>
        <ul className='list-decimal mt-4'>
          <li>Hraje se na stole s rozměry 274 cm x 152,5 cm a výškou 76 cm. </li>
          <li>Míček musí být poslán přes síť, která se nachází uprostřed stolu, a to na protivníkovu stranu. Síť má výšku 15,25 cm nad stolem. </li>
          <li>Každý hráč má povolené používat jednu pálku, která musí být z materiálů schválených Mezinárodní stolnoteniskou federací (ITTF). </li>
          <li>Každý bod začíná servisem, který musí být proveden tak, aby míček překonal síť a dopadl na soupeřovu stranu stolu. Servis musí být podán z ploché ruky a zezadu, a hráč musí být v kontaktu se zemí a za stolem. </li>
          <li>Každý hráč má povoleno odrážet míček jen jednou předtím, než ho pošle zpět na protivníkovu stranu stolu. </li>
          <li>Body se získávají, když protivník nedokáže odrážet míček na vaši stranu stolu nebo pokud zkomolí servis. </li>
          <li>První hráč, který získá 11 bodů a má alespoň 2 body náskok, vyhrává sadu. Zápas se obvykle hraje na nejlepší z 3 nebo 5 sad. </li>
          </ul>
          <p>
            Kompletní soupis paravidel naeznete
            <a className='text-blue-500 underline hover:text-red-500' target={'_blank'} href="https://www.ping-pong.cz/files/documents/2979.pdf"> zde</a>
          </p>
      </div>

    </div>
  )
}

export default App
