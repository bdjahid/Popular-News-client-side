
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


import img1 from '../../../assets/category/img1.jpg';
import img2 from '../../../assets/category/img2.webp';
import img3 from '../../../assets/category/img4.webp';
import img4 from '../../../assets/category/img5.jpeg';
import img5 from '../../../assets/category/img9.webp';
import img6 from '../../../assets/category/img11.jpg';

const CategoryNews = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Games</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Robot</h3></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cricket</h3></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Football</h3></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Politics</h3></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Football</h3></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategoryNews;