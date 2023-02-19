function Grid(props) {
    return (
        <div>
            {props.route.map((road) => 
            
                        <div key={road.route_short_name} className={"grid grid-cols-3"} 
                        style={{ backgroundColor: `#${road.route_color}`
                        }}>
                            <div>Long name: {road.route_long_name}</div>
                            <div>Short name: {road.route_short_name}</div>
                            <a href={road.route_link} target="_blank">Route link</a>
                        </div>
                )
            }
        </div>
    )

}
export default Grid