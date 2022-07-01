import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Play, DollarSign, HelpCircle, FileText, Archive, Settings } from 'react-feather'

import img1 from '@src/assets/images/banner/banner-31.jpg'
import img2 from '@src/assets/images/banner/banner-32.jpg'
import img3 from '@src/assets/images/banner/banner-33.jpg'
import img4 from '@src/assets/images/banner/banner-34.jpg'
import img5 from '@src/assets/images/banner/banner-35.jpg'

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual,
  Scrollbar
} from 'swiper'
import '@styles/react/libs/swiper/swiper.scss'

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual, Scrollbar])

const SwiperCenterSlidesStyle = ({handlerSwiper}) => {
  const params = {
    slidesPerView: 8,
    spaceBetween: 30,
    scrollbar: true,
    navigation: true
  }
  

  return (
    <Card className='bg-transparent shadow-none'>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'>시설 UNIT</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Swiper {...params}>
          <SwiperSlide onClick={() => { handlerSwiper('01') }}>
            <img src='/images/facilities/ACRD.png' alt='swiper 1' className='img-fluid' />
            <div className='text-center mt-50'>Chiller</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('02') }}>
            <img src='/images/facilities/chiller.png' alt='swiper 2' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('03') }}>
            <img src='/images/facilities/cooling.png' alt='swiper 3' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('04') }}>
            <img src='/images/facilities/pdpm.png' alt='swiper 4' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('05') }}>
            <img src='/images/facilities/ups.png' alt='swiper 5' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('06') }}>
            <img src='/images/facilities/upsilon.png' alt='swiper 6' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('01') }}>
            <img src='/images/facilities/ACRD.png' alt='swiper 1' className='img-fluid' />
            <div className='text-center mt-50'>Chiller</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('02') }}>
            <img src='/images/facilities/chiller.png' alt='swiper 2' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('03') }}>
            <img src='/images/facilities/cooling.png' alt='swiper 3' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('04') }}>
            <img src='/images/facilities/pdpm.png' alt='swiper 4' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('05') }}>
            <img src='/images/facilities/ups.png' alt='swiper 5' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
          <SwiperSlide onClick={() => { handlerSwiper('06') }}>
            <img src='/images/facilities/upsilon.png' alt='swiper 6' className='img-fluid' />
            <div className='text-center mt-50'>Cooler</div>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperCenterSlidesStyle
