import Entry from './__Entry/Entry';

function Blog() {
    return (
        <section id="blog">
            <h2>Our Blog</h2>
            <h3>Check our latest news.</h3>
            <ul>
                <Entry/>
                <Entry/>
                <Entry/>
            </ul>
            <button>See All Posts</button>
        </section>
    )
}

export default Blog;