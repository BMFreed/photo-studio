import Card from './__Card/Card'

function Clients(props) {
    let data = props.data.clients;
    const client = data.map(
        ((item, index) =>
            <Card 
                key={index} 
                name={item.name} 
                photo={item.photo}
                quote={item.quote}/>
        )
    )

    return (
        <section className="clients">
            <div className="clients__container container">
                <h2 className="clients__header header-secondary margin-reset">Clients love us</h2>
                <p className="clients__header-caption margin-reset">We have formed true friendships.</p>
                <ul className="clients__list u-list">{client}</ul>
            </div>
        </section>
    )
}

export default Clients;