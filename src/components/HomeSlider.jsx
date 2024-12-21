import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import sliderImage1 from "../assets/Images/sliderImage1.jpg";
import sliderImage2 from "../assets/Images/sliderImage2.jpg";
import sliderImage3 from "../assets/Images/sliderImage3.jpg";

const HomeSlider = () => {
   return (
      <Swiper
         className='h-40 md:h-96'
         modules={[Navigation, EffectFade, Autoplay]}
         effect='fade'
         slidesPerView={1}
         autoplay
         navigation
         pagination={{ clickable: true }}>
         <SwiperSlide className='relative'>
            <img
               src={sliderImage1}
               alt='Slider Image'
               className='w-full h-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase text-gray-100'>
                  Empower Through Volunteering
               </h3>
               <p className='font-light text-gray-300 mt-5'>
                  Join KindConnect and make a difference in the lives of others.
                  Whether you're seeking help or offering a hand, our platform
                  bridges the gap with kindness and purpose.
               </p>
            </div>
         </SwiperSlide>
         <SwiperSlide className='relative'>
            <img
               src={sliderImage2}
               alt='Slider Image'
               className='w-full h-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase text-gray-100'>
                  Connect & Create Impact
               </h3>
               <p className='font-light text-gray-300 mt-5'>
                  Find volunteer opportunities, create meaningful posts, and
                  collaborate with like-minded individuals to drive positive
                  change in your community.
               </p>
            </div>
         </SwiperSlide>
         <SwiperSlide className='relative'>
            <img
               src={sliderImage3}
               alt='Slider Image'
               className='w-full h-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase text-gray-100'>
                  Your Time, Their Hope
               </h3>
               <p className='font-light text-gray-300 mt-5'>
                  Every act of kindness counts. Sign up now to volunteer, post
                  needs, or simply share your support. Together, we create a
                  better world.
               </p>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default HomeSlider;
