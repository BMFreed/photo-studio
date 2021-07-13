import { useState } from "react";
import Entry from "./__Entry/Entry";

function Blog(props) {
    const [visible, setVisible] = useState(3);

    let data = props.data.entries;
    const entry = data
        .slice(0, visible)
        .map((item, index) => (
            <Entry
                key={index}
                title={item.title}
                image={item.image}
                comments={item.comments}
                date={item.date}
                date_text={item.date_text}
            />
        ));

    const seeAll = () => {
        if (visible < data.length) {
            setVisible((value) => value + 3);
        } else {
            setVisible(3);
        }
    };

    return (
        <section className="blog" id="blog">
            <div className="blog__container container">
                <h2 id="blog__header" className="blog__header header-secondary margin-reset">
                    Our Blog
                </h2>
                <p className="blog__header-caption margin-reset">Check our latest news.</p>
                <ul className="blog__entries u-list">{entry}</ul>
                <a
                    className="blog__btn button link"
                    onClick={seeAll}
                    href={visible === 3 ? "#blog__header" : "##"}>
                    {visible < data.length ? "See More Posts" : "Collapse posts"}
                </a>
            </div>
        </section>
    );
}

export default Blog;
