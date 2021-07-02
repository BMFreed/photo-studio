import './Normalize.css';
import './App.sass'
import Header from './common.blocks/Header/Header';
import Footer from './common.blocks/Footer/Footer';
import Banner from './common.blocks/Banner/Banner';
import PricingPlans from './common.blocks/PricingPlans/PricingPlans';
import pricing_info from './json.data/pricing_info.json';
import Map from './common.blocks/Map/Map';
import Services from './common.blocks/Services/Services';
import MoreInfo from './common.blocks/MoreInfo/MoreInfo';
import Clients from './common.blocks/Clients/Clients';
import About from './common.blocks/About/About';
import Blog from './common.blocks/Blog/Blog';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Banner/>
        <PricingPlans data={pricing_info}/>
        <Map/>
        <Services/>
        <MoreInfo/>
        <Clients/>
        <About/>
        <Blog/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
