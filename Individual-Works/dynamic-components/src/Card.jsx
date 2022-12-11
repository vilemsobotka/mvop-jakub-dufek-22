import Butt from "./Butt"

function Card(props){
    return <div class="bg-blue-600 rounded-md w-48 max-h-64 py-28 mt-4">
<p>Komponenta {props.index}</p>
    </div>
}
export default Card