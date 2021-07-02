function Map() {
    return (
        <section>
            <form action="">
                <h2>Studio Near Me</h2>
                <label htmlFor="search-studio">Search for your professional by zip code:</label>
                <input type="text" id="search-studio"/>
                <input type="submit" value="search"/>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11929.306652642686!2d-0.884701648158206!3d41.62707006647514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd591519c2c07255%3A0xf2e7ed062d07eaf1!2z0KLQvtGA0YDQtdGA0L4t0JvQsCDQn9Cw0YEsIDUwMDA3INCh0LDRgNCw0LPQvtGB0LAsINCY0YHQv9Cw0L3QuNGP!5e0!3m2!1sru!2sru!4v1625210838852!5m2!1sru!2sru" width="100%" height="450" loading="lazy" title="Map"></iframe>
        </section>
    )
}

export default Map;