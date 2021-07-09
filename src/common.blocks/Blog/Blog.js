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
        <section className="blog" id="blog">
            <div className="blog__container container">
                <h2 className="blog__header header-secondary margin-reset">Our Blog</h2>
                <p className="blog__header-caption margin-reset">Check our latest news.</p>
                <ul className="blog__entries u-list">{entry}</ul>
                <button className="blog__btn button">See All Posts</button>
            </div>
        </section>
    )
}

export default Blog;