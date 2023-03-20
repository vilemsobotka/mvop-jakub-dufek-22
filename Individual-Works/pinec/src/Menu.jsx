import { Outlet, Link } from "react-router-dom";

function Menu(props){
    return(
        <Link to={props.target} className="font-semibold p-2 active:bg-red-300 hover:bg-red-500 text-white">{props.text}</Link>
    )
}
export default Menu