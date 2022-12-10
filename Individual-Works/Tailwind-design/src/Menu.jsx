import App from "./App";

function Menu(props) {
    return <div class="flex mt-3">
        <div class="flex w-9">
            <img src="https://tse3.mm.bing.net/th?id=OIP.B79qqGp1Wi0S6Ga-XI_MvwHaHa&pid=Api&P=0" class="w-8 h-8 rounded-lg" alt="" />
        </div>
        <div class="flex-initial font-bold">
            <p>text</p>
        </div>
        <div class="grid sm:grid-cols-1 lg:grid-cols-5">
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
            <button type="button" class="text-red-600 rounded-full outline outline-red-500">tlačítko</button>
        </div>
    </div>
}
export default Menu