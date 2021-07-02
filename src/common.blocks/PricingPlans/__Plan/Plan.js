function Plan (props) {
    let data=props.perks;
    const perks = data.map(
        ((item, index) =>
            <li key={index}>{item}</li>
        )
    )
    return (
        <li>
            <h3>{props.title}</h3>
            <ol>{perks}</ol>
            <a id="sm" href="#sm">See more</a>
        </li>
    )
}

export default Plan;