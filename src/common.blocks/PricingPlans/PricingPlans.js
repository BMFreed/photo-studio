import Plan from "./__Plan/Plan";

function PricingPlans(props) {
    let data = props.data.plans;
    const plan = data.map((item, index) => (
        <Plan
            key={index}
            title={item.name}
            icon={item.icon}
            perks={item.perks}
        />
    ));
    return (
        <section className='pricing-plans'>
            <h2 className='hidden'>Pricing Plans</h2>
            <ul className='u-list pricing-plans__list'>{plan}</ul>
        </section>
    );
}

export default PricingPlans;
