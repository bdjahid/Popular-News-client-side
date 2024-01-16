import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.avif';
import img4 from '../../../assets/img7.avif';
import img5 from '../../../assets/img9.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img6.webp';
const Banner = () => {
    return (
        <Carousel>
            <div className="h-48">
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
            <div>
                <img src={img7} />
            </div>
        </Carousel>
    );
};

export default Banner;