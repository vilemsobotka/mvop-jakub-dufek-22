import react, { useState } from "react"
import ReactDOM from "react-dom";
import App from "./App"

function Butt(props) {
    return <div>
        <button class="bg-red-600 rounded-md text-white hover:text-red-600 hover:bg-green-400 p-2 mx-4" onClick={props.exec}>{props.label}</button>
    </div>
}
export default Butt