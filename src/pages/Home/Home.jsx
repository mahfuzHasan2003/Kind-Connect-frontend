import { Helmet } from "react-helmet";
import HomeSlider from "../../components/HomeSlider";
import MakeAnImpactToday from "../../components/MakeAnImpactToday";
import Footer from "../../components/Footer";
import FAQsPage from "../../components/FAQsPage";
import NewsLetter from "../../components/NewsLetter";
import { Fade } from "react-awesome-reveal";

const Home = () => {
   return (
      <div className='mt-14'>
         <Helmet>
            <title> KindConnect | Home</title>
         </Helmet>
         <Fade delay={200} triggerOnce>
            <HomeSlider />
         </Fade>
         <Fade delay={500} triggerOnce>
            <MakeAnImpactToday />
         </Fade>
         <Fade delay={200} triggerOnce>
            <FAQsPage />
         </Fade>
         <Fade delay={200} triggerOnce>
            <NewsLetter />
         </Fade>
         <Footer />
      </div>
   );
};

export default Home;
