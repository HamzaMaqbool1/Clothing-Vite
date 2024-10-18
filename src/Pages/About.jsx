import React from 'react'
import img from '../images/IMG-5.jpg'
import img1 from '../images/IMG-7.jpg'
import img2 from '../images/IMG-1.jpg'
import img3 from '../images/IMG-3.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className="container-fluid pt-md-5 pt-3 pb-5">
        <div className="row">
          <div className="col-md-6 ps-md-5 ps-3">
            <h3 style={{color: '#6F6A42'}}>About us</h3>
            <p className='lead fs-5 lh-3'>
              Welcome to Logo – your ultimate destination for cool and trendy fashion! At Logo, we are dedicated to providing the latest styles that resonate with the vibrant and dynamic spirit of today's youth. Our collection is carefully curated to ensure that every piece embodies the cutting-edge trends and timeless coolness that define your unique style.
            </p>
          </div>
          <div className="col-md-4 ps-md-5 ps-3">
            <img src={img} alt="" className='img-fluid rounded'/>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-md-5 pt-3 pb-5" style={{backgroundColor:'#F8F8F8'}}>
        <h4 className='text-center fw-semibold' style={{color:'#6F6A42'}}>Our Mission</h4>
        <div className="row">
          <div className="col-md-4">
            <img src={img1} alt="" className='img-fluid rounded' />
          </div>
          <div className="col-md-8">
            <p className='lead lh-lg text-justify pt-md-5 pt-3'>
            Our mission is simple: to inspire and empower youngsters to express themselves through fashion. Whether you're looking for the perfect outfit for a night out, a casual day at school, or anything in between, Logo has you covered. We believe in fashion as a form of self-expression, and our diverse range of clothing is designed to cater to every mood and moment.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-5">
      <h4 className='text-center fw-semibold' style={{color:'#6F6A42'}}>Our Team</h4>
      </div>
      <div className="container-fluid pt-md-5 pt-3 pb-md-5 pb-3">
        <div className="row d-flex">
        <div className="col-md-3 ">
          <img src={img2} alt="" className='img-fluid pt-2' />
        </div>
        <div className="col-md-3"><img src={img3} alt="" className='img-fluid pt-2' /></div>
        <div className="col-md-3"><img src={img2} alt="" className='img-fluid pt-2' /></div>
        <div className="col-md-3"><img src={img2} alt="" className='img-fluid pt-2' /></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ps-md-5 ps-3 pt-md-5 pt-3">
          <div className="col">
            <div className="container text-start">
              <h4 className='lh-2'>Lorem Ipsum</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-md-5 pt-3 pb-md-5 pb-3">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <div className="container rounded w-55" style={{backgroundColor:'#6F6A42'}}>
              <div className="row">
                <div className="col-md-6 ps-md-5 ps-3 pt-md-5 pt-3 pb-md-4 pb-3">
                  <h3 className='text-white'>Stay in the loop</h3>
                  <p className='text-white'>Subscribe to receive the latest news and updates about TDA.
                  We promise not to spam you!</p>
                </div>
                <div className="col-md-6 pb-sm-5 pb-3">
                  <div className="container buttoninput">
                  <div className="custom-input">
                    <input type="text" placeholder="Enter your text here" />
                    <button className="btn text-white" style={{backgroundColor:'#6F6A42'}}>Continue</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
