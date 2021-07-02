import Entry from './__Entry/Entry';

function Blog(props) {
    let data = props.data.entries;
    const entry = data.map(
        ((item, index) =>
            <Entry 
                key={index} 
                title={item.title} 
                image={item.image}
                comments={item.comments}
                date={item.date}
                date_text={item.date_text}/>
        )
    )
    return (
        <section id="blog">
            <h2>Our Blog</h2>
            <h3>Check our latest news.</h3>
            <ul>{entry}</ul>
            <button>See All Posts</button>
        </section>
    )
}

export default Blog;