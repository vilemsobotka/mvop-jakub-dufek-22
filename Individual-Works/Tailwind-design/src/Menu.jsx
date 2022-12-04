import App from "./App";

function Menu(props) {
    return <div class="flex mt-3">
        <div class="flex-none w-9">
            <img src="https://tse3.mm.bing.net/th?id=OIP.B79qqGp1Wi0S6Ga-XI_MvwHaHa&pid=Api&P=0" class="w-8 rounded-lg" alt="" />
        </div>
        <div class="flex-initial font-bold">
            <p>text</p>
        </div>
        <div class="flex-auto justify-center">
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
            <m class="mx-12 hover:text-red-600">chleba</m>
        </div>
        <div class="flex-initial">
            <button type="button" class="text-red-600 inline-block rounded-full outline outline-offset-4 outline-red-500 text-xs">tlačítko</button>
        </div>
    </div>
}
export default Menu