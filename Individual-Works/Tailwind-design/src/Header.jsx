import App from "./App";

function Header(props) {
    return <div class="mt-16 text-center grid place-items-center">

        <h1 class="text-3xl font-bold">{props.headline}</h1>
        <p class="max-w-xs">{props.text}</p>
        <button type="button" class="mt-4 bg-red-600 text-white rounded-full ring-offset-4 ">{props.button}</button>
        <img src="https://tse2.mm.bing.net/th?id=OIP.RZm0dQyM3tVsldbm45_TwQHaF7&pid=Api&P=0" class="mt-4" />
        <p class="text-red-600 text-xs mt-8"> text</p>
        <p class="text-3xl font-bold">další text</p>
    </div>
}
export default Header