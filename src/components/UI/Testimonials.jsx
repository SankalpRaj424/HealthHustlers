import React from 'react'
import '../../styles/testimonials.css'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import avatar01 from '../../assets/img/anand11.png'
import avatar02 from '../../assets/img/dhiraj1.png'
import avatar03 from '../../assets/img/vaibhav.png'

export default function Testimonials() {
  return (
    <>
    <Container>
        <div
          className='container sliders'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          <h2 className='section_title'>Testimonials</h2>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'
          >
            <SwiperSlide className='swipy'>
              <div className='slide_item'>
                <div className='slide_img-01'>
                  <img src={avatar01} alt='' />
                </div>

                <h4>Anand</h4>
                <p>
                  Best training and trainers I have ever had in my life!.Super
                  friendly atmosphere,Every session is different and fun.The
                  trainers really push,motivate and helps us to exceed our
                  limits and achieve our goals.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className='swipy'>
              <div className='slide_item'>
                <div className='slide_img-02'>
                  <img src={avatar02} alt='' />
                </div>

                <h4>Dheeraj</h4>
                <p>
                  HealthHustlers fitness is not just like any other fitness facility
                  but like a family!.Highly recommended for all the fitness
                  lovers irrespective of what level you are in. I am definitely
                  coming back!!!
                </p>
              </div>
            </SwiperSlide >

            <SwiperSlide className='swipy'>
              <div className='slide_item'>
                <div className='slide_img-03'>
                  <img src={avatar03} alt='' />
                </div>

                <h4>Vaibhav</h4>
                <p>
                  I knew I was in for some serious workouts when Sankalp (Head
                  trainer) pushed me as hard as I’d been in 5 years on the first
                  day. Always with a smile but more importantly an awareness of
                  my abilities Sankalp and team are the reason I am coming back to
                  train again. Want to push yourself with great people then this
                  is the place. Big shout to Sankalp Raj he helped me find new
                  limits. Keep up the great work!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  )
}
