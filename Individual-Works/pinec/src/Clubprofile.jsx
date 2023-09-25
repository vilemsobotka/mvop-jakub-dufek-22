function Clubprofile(props) {
    return (
        <div className="bg-slate-200 p-8 rounded-xl shadow-md max-w-prose">
            <div className="flex items-center">
                <img className="w-32 mr-4" src={props.logo} alt="logo" />
                <div>
                    <h2 className="text-2xl">{props.name}</h2>
                    {props.address}
                </div>
            </div>
            <p className="max-w-2xl mt-4">
                {props.info}
            </p>
        </div>
    )
}
export default Clubprofile