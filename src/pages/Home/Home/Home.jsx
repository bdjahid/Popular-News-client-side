import About from "../About/About";
import AllPublisher from "../AllPublisher/AllPublisher";
import Banner from "../Banner/Banner";
import CategoryNews from "../CategoryNews/CategoryNews";
import Contact from "../Contact/Contact";
import Paralax from "../Paralax/Paralax";
import Statistic from "../Statistic/Statistic";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CategoryNews></CategoryNews>
            <Paralax></Paralax>
            <Statistic></Statistic>
            <AllPublisher></AllPublisher>
            <Contact></Contact>
        </div>
    );
};

export default Home;