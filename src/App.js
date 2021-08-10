// Styles import
import "./Normalize.css";
import "./App.sass";

// Main blocks import
import Header from "./common.blocks/Header/Header";
import Banner from "./common.blocks/Banner/Banner";
import PricingPlans from "./common.blocks/PricingPlans/PricingPlans";
import Map from "./common.blocks/Map/Map";
import Services from "./common.blocks/Services/Services";
import MoreInfo from "./common.blocks/MoreInfo/MoreInfo";
import Clients from "./common.blocks/Clients/Clients";
import About from "./common.blocks/About/About";
import Blog from "./common.blocks/Blog/Blog";
import Footer from "./common.blocks/Footer/Footer";

// Json import
import pricing_info from "./json.data/pricing_info.json";
import service_photos from "./json.data/service_photos.json";
import client_list from "./json.data/client_list.json";
import blog_entries from "./json.data/blog_entries.json";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="display-fix">
                <Banner />
                <PricingPlans data={pricing_info} />
                <Map />
                <Services data={service_photos} />
                <MoreInfo />
                <Clients data={client_list} />
                <About />
                <Blog data={blog_entries} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
