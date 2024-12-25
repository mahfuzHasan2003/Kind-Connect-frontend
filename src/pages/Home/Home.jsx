import { Helmet } from "react-helmet";
import HomeSlider from "../../components/HomeSlider";
import MakeAnImpactToday from "../../components/MakeAnImpactToday";

const Home = () => {
   return (
      <div className='my-14'>
         <Helmet>
            <title> KindConnect | Home</title>
         </Helmet>
         <HomeSlider />
         <MakeAnImpactToday />
      </div>
   );
};

export default Home;
