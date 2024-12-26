import { Helmet } from "react-helmet";
import HomeSlider from "../../components/HomeSlider";
import MakeAnImpactToday from "../../components/MakeAnImpactToday";
import Footer from "../../components/Footer";

const Home = () => {
   return (
      <div className='mt-14'>
         <Helmet>
            <title> KindConnect | Home</title>
         </Helmet>
         <HomeSlider />
         <MakeAnImpactToday />
         <Footer />
      </div>
   );
};

export default Home;
