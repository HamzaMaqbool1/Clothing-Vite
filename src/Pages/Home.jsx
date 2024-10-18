import React, { useState , useEffect } from 'react'
import img1 from '../images/IMG-4.jpg'
import img2 from '../images/IMG-5.jpg'
import img3 from '../images/IMG-6.jpg'
import img4 from '../images/IMG-7.jpg'
import img5 from '../images/IMG-8.jpg'
import img6 from '../images/IMG-9.jpg'
import img7 from '../images/IMG-10.jpg'
import women from '../images/Women.png'
import comma from '../images/comma.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
    const [active, setActive] = useState(null);
    const handleClick = (page) => {
        setActive(page);
    };
    const [currentSlide,setCurrentSlide]=useState(0);
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    
    const cards = [
        {
          title: 'Gucci-Shirt',
          text: '$38.99  |  5.0',
          imgSrc: img1,
        },
        {
          title: 'Armani-Shirt',
          text: '$34.88  |  8.0',
          imgSrc: img2,
        },
        {
          title: 'Seveston-Jacket',
          text: '$100.88  |  8.0',
          imgSrc: img3,
        },
        {
            title: 'Gucci-Shirt',
            text: '$38.99  |  5.0',
            imgSrc: img4,
          },
          {
            title: 'Armani-Shirt',
            text: '$34.88  |  8.0',
            imgSrc: img5,
          },
          {
            title: 'Seveston-Jacket',
            text: '$84.88  |  8.0',
            imgSrc: img6,
          },
          {
            title: 'Seveston-Jacket',
            text: '$84.88  |  8.0',
            imgSrc: img7,
          },
          {
            title: 'Gucci-Gucci-Shirt',
            text: '$38.99  |  5.0',
            imgSrc: img4,
          }
    ];
    const cardGroups = [];
    for (let i = 0; i < cards.length; i += 4) {
      cardGroups.push(cards.slice(i, i + 4));
    }
    const cardGroups1=[];
    for (let i = 0; i < 1; i+=3) {
        cardGroups1.push(cards.slice(i, i + 3));
    }
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {

      const targetDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  
      const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
  
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        return { days, hours, minutes, seconds };
      };
  
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      setTimeLeft(calculateTimeLeft());
  
      return () => clearInterval(timer);
    }, []);
  return (
    <section id='home'>
        <div className="container-fluid">
            <div className="row">
                <div className="col  d-flex flex-column align-items-center mt-md-5 mt-3">
                    <h2 className='fw-semibold' style={{color:'#6F6A42'}}>Best Selling</h2>
                    <p className='lead'>Get in on the trend with our curated selection of best-selling stle</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
        {cardGroups.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="d-flex justify-content-center flex-wrap">
              {group.map((cards, cardIndex) => (
                <Link to={`/product/${cardIndex}`}  key={cardIndex} className='text-decoration-none text-black'>
                  <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3 " 
                style={{ width: '18rem' }}>
                  <img src={cards.imgSrc} className="card-img-top" alt={cards.title} />
                  <div className="card-body">
                    <h5 className="card-title text-center ">{cards.title}</h5>
                    <p className="card-text text-center  ps-5">{cards.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {currentSlide > 0 && (
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => handleSlideChange(currentSlide - 1)}>
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'#EFE8C2', borderRadius:'16px'}}></span>
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      {currentSlide < cardGroups.length - 1 && (
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => handleSlideChange(currentSlide + 1)}>
          <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'#EFE8C2', borderRadius:'16px'}}></span>
          <span className="visually-hidden">Next</span>
        </button>
      )}
    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5 mb-5">
                <div className="col-md-12" id='arrowbutton'>
                <Link to="/" className="d-inline-flex focus-ring py-2 px-4 text-decoration-none border rounded-2" style={{  outlineColor: 'rgba(25, 135, 84, 0.25)', color: '#6F6A42', position: 'relative',overflow: 'hidden', transition: 'all 0.3s ease' }}onMouseEnter={(e) => e.target.querySelector('.bi-arrow-right').style.transform = 'translateX(5px)'}onMouseLeave={(e) => e.target.querySelector('.bi-arrow-right').style.transform = 'translateX(0)'}>See More<i className="bi bi-arrow-right ms-2" style={{ color: 'green', transition: 'transform 0.3s ease' }}></i></Link>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="row">
                <div className="col  d-flex flex-column align-items-center mt-md-5 mt-3">
                    <h2 className='fw-semibold' style={{color:'#6F6A42'}}>Best Selling</h2>
                    <ul className='d-flex gap-md-5 gap-2'>
                    <li
        className={active === 'sale' ? 'active' : ''}
        onClick={() => handleClick('sale')}><Link
          className={`nav-link ${active === 'sale' ? 'active-link' : ''}`}to="/"
          style={active === 'sale' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Sale</Link></li>
                        <li
        className={active === 'hot' ? 'active' : ''}
        onClick={() => handleClick('hot')}><Link
          className={`nav-link ${active === 'hot' ? 'active-link' : ''}`}to="/"
          style={active === 'hot' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Hot</Link></li>
                        <li
        className={active === 'newarrival' ? 'active' : ''}
        onClick={() => handleClick('newarrival')}><Link
          className={`nav-link ${active === 'newarrival' ? 'active-link' : ''}`}to="/"
          style={active === 'newarrival' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >NewArrival</Link></li>
                        <li
        className={active === 'accessories' ? 'active' : ''}
        onClick={() => handleClick('accessories')}><Link
          className={`nav-link ${active === 'accessories' ? 'active-link' : ''}`}to="/"
          style={active === 'accessories' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Accssories</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
           {active === 'sale' &&
               <div className="col-md-12">
               <div className="d-flex justify-content-center flex-wrap">
             {cards.map((card, cardIndex) => (
               <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3" 
               style={{ width: '18rem' }}>
                 <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                 <div className="card-body">
                   <h5 className="card-title text-center">{card.title}</h5>
                   <p className="card-text text-center ps-5">{card.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                 </div>
               </div>
             ))}
           </div>
               </div>
           }
           {active === 'hot' &&
               <div className="col-md-12">
               <div className="d-flex justify-content-center flex-wrap">
             {cards.map((card, cardIndex) => (
               <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3" 
               style={{ width: '18rem' }}>
                 <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                 <div className="card-body">
                   <h5 className="card-title text-center">{card.title}</h5>
                   <p className="card-text text-center ps-5">{card.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                 </div>
               </div>
             ))}
           </div>
               </div>
           }
           {active === 'newarrival' &&
               <div className="col-md-12">
               <div className="d-flex justify-content-center flex-wrap">
             {cards.map((card, cardIndex) => (
               <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3" 
               style={{ width: '18rem' }}>
                 <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                 <div className="card-body">
                   <h5 className="card-title text-center">{card.title}</h5>
                   <p className="card-text text-center ps-5">{card.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                 </div>
               </div>
             ))}
           </div>
               </div>
           }
           {active === 'accessories' &&
               <div className="col-md-12">
               <div className="d-flex justify-content-center flex-wrap">
             {cards.map((card, cardIndex) => (
               <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3" 
               style={{ width: '18rem' }}>
                 <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                 <div className="card-body">
                   <h5 className="card-title text-center">{card.title}</h5>
                   <p className="card-text text-center ps-5">{card.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                 </div>
               </div>
             ))}
           </div>
               </div>
           }
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#EFE8C2'}}>
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className='d-flex flex-wrap'>
                    </div>
                    <div style={{overflowY:'hidden'}}><img src={women} alt="Women Image" style={{position:'relative', top:'130px'}}/></div>
                </div>
                <div className="col-md-6 pt-md-5 pt-3">
                    <h2 style={{color:'#6F6A42'}}>Exclusive Offer</h2> 
                    <p className='lead fs-4 lh-lg' style={{color:'#6F6A42'}}>Unlock the unlimited style upgrade with our exclusive offer Enjoy savings of up to 40% off on your latest New Arrivals</p>   
                    <div className='d-flex gap-5 mb-5'>
                        <div className='rounded bg-white p-md-2 p-2 text-center' style={{width:'50', height:'50',color:'#224F34'}}>
                            {timeLeft.days}
                            <h4>Days</h4>
                        </div>
                        <div className='rounded bg-white  p-md-2 p-2 text-center' style={{width:'50', height:'50',color:'#224F34'}}>
                            {timeLeft.hours}
                            <h4>Hours</h4>
                        </div>
                        <div className='rounded bg-white  p-md-2 p-2 text-center' style={{width:'50', height:'50',color:'#224F34'}}>
                            {timeLeft.minutes}
                            <h4>Minutes</h4>
                        </div>
                    </div>  
                    <button className='btn ps-sm-5 pe-sm-5 pt-sm-3 pb-sm-3 mb-5' style={{backgroundColor:'#6F6A42', color:'white'}}>Shop Now</button>         
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
            <div className="col  d-flex flex-column align-items-center mt-md-5 mt-3">
                    <h2 className='fw-semibold' style={{color:'#6F6A42'}}>Cool & Trendy Clothing For You</h2>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="row" id='homecard'>
                <div className="col-md-12 pt-md-5 pt-3">
                {cardGroups1.map((group, index) => (
            <div key={index} className="d-md-flex justify-content-center">
              {group.map((cards, cardIndex) => (
                <div key={cardIndex}  className="card my-2 mx-2 col-12 col-md-6 col-lg-3 border-0 " 
                style={{ width: '18rem' }}>
                  <img src={cards.imgSrc} className="card-img-top imglast" alt={cards.title}
                   style={{ height: '250px' }} />
                  <div className="card-body">
                    <h5 className="card-title text-center">Accessories</h5>
                    <p className="card-text text-center ps-5">Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.</p>
                  </div>
                </div>
              ))}
            </div>
        ))}
                </div>
            </div>
            <div className="row">
            <div className="col  d-flex flex-column align-items-center mt-md-5 mt-3">
                    <h2 className='fw-semibold' style={{color:'#6F6A42'}}>Client Feedback</h2>
                </div>
            </div>
            <div className="row mt-md-5">
            <div id="carouselExampleControls" className="carousel slide" style={{paddingBottom:'350px', overflow:'hidden'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row d-flex justify-content-around">
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row d-flex justify-content-around">
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row d-flex justify-content-around">
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      <div className='col-md-3' style={{backgroundColor:"#F8F8F8"}}>
        <div>
          <img src={comma} alt="" style={{ width: '20px', height: '20px', backgroundColor: '#F8F8F8' }} />
        </div>
        <h5>Maria Shabbir</h5>
        <p className='lead fs-6'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!</p>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ marginLeft:'500px'}}>
    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor:'black'}}></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{marginRight:'500px'}}>
    <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                
            </div>
        </div>
    </section>
  )
}

export default Home
