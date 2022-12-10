import { useState } from "react"
import App from "./App"

function Butt(props) {
    const [count, Setcount] = useState(o)
    return <div>
        <button class="bg-red-600 rounded-md text-white hover:text-red-600 hover:bg-green-400 p-2 mx-4">{props.label}</button>
    </div>
}
export default Butt