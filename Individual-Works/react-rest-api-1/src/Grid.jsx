function Grid(props) {
    return (
        <div>
            {props.route.map((road) => {
                return (
                        <tr key={road.road_short_name}>
                            <th><p>Long name: {road.route_long_name}</p></th>
                            <th><p>Short name: {road.route_short_name}</p></th>
                            <th><a href={road.route_link}>Route link</a></th>
                        </tr>
                )
            })}
        </div>
    )

}
export default Grid