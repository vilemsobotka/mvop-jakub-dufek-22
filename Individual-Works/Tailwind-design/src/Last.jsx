import App from "./App";

function Part() {
    return <div class="flex mt-4 w-80 text-left">
        <img src="https://tse3.mm.bing.net/th?id=OIP.B79qqGp1Wi0S6Ga-XI_MvwHaHa&pid=Api&P=0" class="h-8 w-8 rounded-lg" alt="" />
        <div class="ml-4">
            <p class="text-xl font-bold ">nadpis</p>
            <p class="overflow-ellipsis text-xs" >text gjef jhsfejsfjsefj  sefjhgsjfgsjh gfjsgfjsgfjhsfjhsgdj hfgjsdgfjsdjfgwue íwušéíqf uhiakcnoq hufgisbkůcj ihw=i uf</p>
        </div>
    </div>

}
function Last() {
    return <div class="text-center mt-8" >
        <p class="text-xs text text-red-500">malý text</p>
        <p class="text-3xl font-bold">velký text</p>
        <div class="grid lg:grid-cols-2">
            <Part />
            <Part />
            <Part />
            <Part />
        </div>
    </div>
}
export default Last