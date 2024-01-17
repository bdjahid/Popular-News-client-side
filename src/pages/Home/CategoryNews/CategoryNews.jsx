
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
import img4 from '../../../assets/category/wildcard-1-600x400.jpg';
import img5 from '../../../assets/category/img9.webp';
import img6 from '../../../assets/category/img11.jpg';

const CategoryNews = () => {
    return (
        <div>
            <div className='text-center my-10 font-bold'>
                <h1 className='text-5xl mb-4'>Trending Articles</h1>
                <p className='text-2xl'>Discover Whats Hot: Trending Articles You Cant Miss</p>
            </div>
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
                    <p className='text-2xl uppercase mt-8 text-center'>Views 20</p>
                </SwiperSlide>

                <SwiperSlide><img src={img2} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Robot</h3>
                    <p className='text-2xl uppercase mt-8 text-center'>Views 10</p>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cricket</h3>
                    <p className='text-2xl uppercase mt-8 text-center'>Views 5</p>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Peacock</h3>
                    <p className='text-2xl uppercase mt-8 text-center'>Views 50</p>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Politics</h3>
                    <p className='text-2xl uppercase mt-8 text-center'>Views 30</p>
                </SwiperSlide>
                <SwiperSlide><img src={img6} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Football</h3>
                    <p className='text-2xl uppercase mt-8 text-center'>Views 55</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategoryNews;