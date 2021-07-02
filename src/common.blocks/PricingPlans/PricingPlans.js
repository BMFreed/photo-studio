import Plan from './__Plan/Plan';

function PricingPlans (props) {
    let data = props.data.plans;
    const plan = data.map(
        ((item, index) =>
            <Plan key={index} title={item.name} perks={item.perks}/>
        )
    )
    return (
        <section>
            <h2>Pricing Plans</h2>
            <ul>{plan}</ul>
        </section>
    )
}

export default PricingPlans;