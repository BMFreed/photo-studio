function Plan(props) {
    let data = props.perks;
    const perks = data.map((item, index) => (
        <li className='pricing-plans__perk' key={index}>
            <span className='pricing-plans__perk-number'>{index + 1}</span>
            <span className='pricing-plans__perk-text'>{item}</span>
        </li>
    ));
    return (
        <li className='pricing-plans__plan' id={props.title}>
            <img
                className='pricing-plans__icon'
                src={process.env.PUBLIC_URL + props.icon}
                alt='icon'
            />
            <h3 className='pricing-plans__title margin-reset'>{props.title}</h3>
            <ol className='pricing-plans__perks'>{perks}</ol>
            <a className='pricing-plans__btn button link' href='##'>
                See more
            </a>
        </li>
    );
}

export default Plan;
