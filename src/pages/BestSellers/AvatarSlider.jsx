import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import users from '../../../public/data/users';
import AvatarCard from './AvatarCard';

function AvatarSlider() {
  return (
    <div className='text-white h-full max-w-6xl container'>
              <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        
        className="mySwiper"
      >
        {users.map((user,index)=>(
            <SwiperSlide key={index} className='mt-8'>
                <div >
                    <AvatarCard
                    img={user.img}
                    name={user.name}
                    handle={user.handle}
                    gradient={user.gradient}
                    />
                </div>
            </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default AvatarSlider
