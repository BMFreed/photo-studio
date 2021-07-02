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
        <section>
            <h2>Clients love us</h2>
            <h3>We have formed true friendships.</h3>
            <ul>{client}</ul>
        </section>
    )
}

export default Clients;