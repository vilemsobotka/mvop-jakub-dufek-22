import Clubprofile from "./Clubprofile"
function Clubs() {
    return (
        <div className=' mx-32 mt-16'>
            <h2 className='text-2xl mt-6 font-bold'>KLUBY</h2>
            <div className='mt-4'>
                <div>
                    <Clubprofile name="SF SKK El Nino Praha" address="Na Kotlářce 1, 160 00 Praha 6" logo="../elnino.jpg"
                        info="Největší pražský klub stolního tenisu. Hraje od extraligy až po pražský přebor 7. třídy. Jeho mládežnické týmy hrají soutěže od republikové úrovně po okresní úroveň." />
                </div>
                <div className="mt-4">
                    <Clubprofile name="TJ Lokomotiva Vršovice" address="Sportovní 1380, 101 00 Praha 10" logo="../lokotka.jpg"
                        info="Velký pražský oddíl stolního tenisu hrající soutěže od 3. ligy až po okresní úroveň - pražský přebor 6. třídy." />
                </div>
            </div>
        </div>
    )
}
export default Clubs