import { Helmet } from "react-helmet";
import HomeSlider from "../../components/HomeSlider";
import MakeAnImpactToday from "../../components/MakeAnImpactToday";
import Footer from "../../components/Footer";
import FAQsPage from "../../components/FAQsPage";
import NewsLetter from "../../components/NewsLetter";

const Home = () => {
   return (
      <div className='mt-14'>
         <Helmet>
            <title> KindConnect | Home</title>
         </Helmet>
         <HomeSlider />
         <MakeAnImpactToday />
         <FAQsPage />
         <NewsLetter />
         <Footer />
      </div>
   );
};

export default Home;
