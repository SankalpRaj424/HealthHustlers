import React from 'react'
import '../../styles/start.css'
import trainingImg from '../../assets/img/getstart.png'

const Start = () => {
  return (
    <section id='classes'>
      <div className='container'>
        <div className='start_wrapper'>
          <div className='start_img'>
            <img
              src={trainingImg}
              alt=''
              data-aos='fade-left'
              data-aos-duration='1500'
            />
          </div>

          <div
            className='start_content'
            data-aos='fade-right'
            data-aos-duration='1500'
          >
            <h2 className='section_title'>
              Ready to <span className='highlights'>hustle?</span>
            </h2>
            <p>
              Discover the exhilarating world of Cardio Tai Box, Yoga, HIIT, and more with 
              HealthHustlers! Access your favorite instructors anytime, anywhere, right from your pocket. 
              Whether you're a beginner or an experienced fitness enthusiast, our diverse range of 
              workouts caters to all fitness levels. Get ready for enjoyable and engaging workouts that 
              will make you forget you're even exercising!
            </p>
            <button className='register_btn'>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start
