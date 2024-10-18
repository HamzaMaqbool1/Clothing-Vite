import React, { useState } from 'react'
import { useParams,Link} from 'react-router-dom'
import img1 from '../images/IMG-4.jpg'
import img2 from '../images/IMG-5.jpg'
import img3 from '../images/IMG-6.jpg'
import img4 from '../images/IMG-7.jpg'
import img5 from '../images/IMG-8.jpg'
import img6 from '../images/IMG-9.jpg'
import img7 from '../images/IMG-10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = () => {
    const[isActive,setActive]=useState(false);
    const[isActive1,set1Active]=useState(false);
    const[isActive2,set2Active]=useState(false);
    const[isActive3,set3Active]=useState(false);
    const[isActive4,set4Active]=useState(false);
    const [isNum,setNum]=useState(0);
    const [isExpand,setExpand]=useState(false);
    const handleExpand=()=>{
        setExpand(!isExpand)
    }
   

    const handleActive=()=>{
        setActive(!isActive)
        setNum(isNum+1.4)
    
    }
    const handle1Active=()=>{
        set1Active(!isActive1)
        setNum(isNum+1.4)
    }
    const handle2Active=()=>{
        set2Active(!isActive2)
        setNum(isNum+1.4)
    }
    const handle3Active=()=>{
        set3Active(!isActive3)
        setNum(isNum+1.4)
    }
    const handle4Active=()=>{
        set4Active(!isActive4)
        setNum(isNum+1.4)
    }

    const products = [
        {
          title: 'Gucci-Shirt(Blue)',
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
    const { cardIndex }=useParams();
    const index=parseInt(cardIndex);
    const product = products[index];
    const [activeLink ,setActiveLink]=useState(null)
    const handleLink=(option)=>{
        setActiveLink(option)
    }
  return (
    <section id='Detail'>
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md-2 p-0">
                    <div className='d-flex flex-lg-column flex-row flex-md-wrap'>
                        <img src={product.imgSrc} alt="" className='img-fluid rounded mb-md-3 mb-1'/>
                        <img src={product.imgSrc} alt="" className='img-fluid rounded mb-md-3 mb-1' />
                        <img src={product.imgSrc} alt="" className='img-fluid rounded mb-md-3 mb-1' />
                        <img src={product.imgSrc} alt="" className='img-fluid rounded mb-1'/>
                    </div>
                </div>  
                <div className="col-md-5">
                    <img src={product.imgSrc} alt="" className='img-fluid rounded' style={{height:'100%'}} />
                </div>
                <div className="col-md-5">
                    <h2>{product.title}</h2>
                    <p className='fs-5'>Gucci</p>
                    <p className='fs-5'>Sold By:Paul</p>
                    <div className='d-flex gap-2'>
                    <div onClick={handleActive}> <FontAwesomeIcon icon={faStar} size='1x' 
                    style={{color: isActive ?'#2126DE':'white',backgroundColor:'yellow',borderRadius:'15px'}}
                    /></div>
                    <div onClick={handle1Active}> <FontAwesomeIcon icon={faStar} size='1x' 
                    style={{color: isActive1 ?'#2126DE':'white',backgroundColor:'yellow',borderRadius:'15px'}}
                    /></div>
                    <div onClick={handle2Active}> <FontAwesomeIcon icon={faStar} size='1x' 
                    style={{color: isActive2 ?'#2126DE':'white',backgroundColor:'yellow',borderRadius:'15px'}}
                    /></div>
                    <div onClick={handle3Active}> <FontAwesomeIcon icon={faStar} size='1x' 
                    style={{color: isActive3 ?'#2126DE':'white',backgroundColor:'yellow',borderRadius:'15px'}}
                    /></div>
                    <div onClick={handle4Active}> <FontAwesomeIcon icon={faStar} size='1x' 
                    style={{color: isActive4 ?'#2126DE':'white',backgroundColor:'yellow',borderRadius:'15px'}}
                    /></div>
                    <div>{Math.floor(isNum)}</div>
                    <div><h5 className='text-muted'>36 Reviews</h5></div>
                    </div>
                    <div className='d-flex gap-2'>
                        <div><p>Rs:700 <span className='text-muted' style={{textDecoration:'line-through'}}>Rs.1000</span></p></div>
                        <div><p className='text-success'>(30%-off)</p></div>
                    </div>
                    <h5 className='fw-bold'>Select Size</h5>
                    <a href="#" onClick={handleExpand}>Size chart</a>
                    { isExpand &&  <div className='d-flex gap-3'>
                   <div style={{borderRadius:'20px', width:'40px',height:'40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='border'>
                    <p className='m-0'>S</p>
                  </div>
                  <div style={{borderRadius:'20px', width:'40px',height:'40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='border'>
                  <p className='m-0'>M</p>
                  </div>
                 <div style={{borderRadius:'20px', width:'40px',height:'40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='border'>
                   <p className='m-0'>L</p>
                 </div>
                  <div style={{borderRadius:'20px', width:'40px',height:'40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='border'>
                 <p className='m-0'>XL</p>
                </div>
                </div>}
                <h5 className='fw-bold mt-2'>Select Color</h5>
                <div className='d-flex gap-3'>
                    <div className='rounded-circle' style={{width:'30px', height:'30px',backgroundColor:'blue'}}></div>
                    <div className='rounded-circle'style={{width:'30px', height:'30px',backgroundColor:'red'}}></div>
                    <div className='rounded-circle' style={{width:'30px', height:'30px',backgroundColor:'grey'}}></div>
                </div>
                <div>
                    <h3 className='fs-5 fw-semibold'>Best Offers</h3>
                    <p><span className='fw-semibold fs-6'>Special Offers</span>get 25% off <span href="#" className='text-primary'>T&C</span></p>
                    <p><span className='fw-semibold fs-6'>Bank Offers</span>get 30% off on Axis Bank Credit card<span href="#" className='text-primary'>T&C</span> </p>
                    <p><span className='fw-semibold fs-6'>Wallet Offers</span>get 40% cashback via Paytm wallet on first transaction<span href="#" className='text-primary'>T&C</span></p>
                    <p><span className='fw-semibold fs-6'>Special Offers</span>get 25% off<span href="#" className='text-primary'>T&C</span></p>
                </div>
                <div className='d-flex gap-3'>
                <div className="div btn text-white" style={{backgroundColor:'#6F6A42'}}>Add to Cart</div>
                <div><FontAwesomeIcon icon={faHeart} size='2x' style={{color:'#6F6A42'}}/></div>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-md-12 mt-3">
            <ul className='d-flex justify-content-around'>
                <li
        className={activeLink === 'product' ? 'active' : ''}
        onClick={() => handleLink('product')}><Link
          className={`nav-link ${activeLink === 'product' ? 'active-link' : ''}`}to={`/product/${index}`}
          style={activeLink === 'product' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Product_Detail</Link></li>
        <li
        className={activeLink === 'specification' ? 'active' : ''}
        onClick={() => handleLink('specification')}><Link
          className={`nav-link ${activeLink === 'specification' ? 'active-link' : ''}`}to={`/product/${index}`}
          style={activeLink === 'specification' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Specification</Link></li>
        <li
        className={activeLink === 'review' ? 'active' : ''}
        onClick={() => handleLink('review')}><Link
          className={`nav-link ${activeLink === 'review' ? 'active-link' : ''}`}to={`/product/${index}`}
          style={activeLink === 'review' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: 'black' }}
        >Review</Link></li>
        </ul>
            </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr/>
                </div>
            </div>
            <div className="row">
               {activeLink === 'product' &&
                  (
                    <div className="col-md-12">
                    <div>
                        <h4>Product_Details</h4>
                        <p>Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem</p>
                    </div>
                    <div>
                        <h4>Size & Fit</h4>
                        <p>The model (height 5'8") is wearing a size S</p>
                    </div>
                    <div>
                        <h4>Material & Care</h4>
                        <p>100% cotton Machine Wash</p>
                    </div>
                </div>
                  ) 
               }
               {activeLink === 'specification' &&
                  (
                    <div className="col-md-12">
                        <h4 className='text-center text-danger'>Check Product Details</h4>
                </div>
                  ) 
               }
                {activeLink === 'review' &&
                  (
                    <div className="col-md-12">
                        <h4 className='text-center text-success'>Healthy Review</h4>
                </div>
                  ) 
               }
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className='fw-bold'>Similar Products</h4>
                </div>
            </div>
            <div className="row" id='productcard'>
                
                {products.slice(0,5).map((product,index)=>(
                    <div key={index}  className=" card my-2 mx-sm-2 col-12 col-md-6 col-lg-3 border-0" 
                    style={{ width: '15rem' }}>
                      <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                      <div className="card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <p className="card-text text-center">{product.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                      </div>
                    </div>
                ))}
                
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className='fw-bold'>Products Like</h4>
                </div>
            </div>
            <div className="row" id='productcard'>
              {products.slice(0,5).map((product,index)=>(
                    <div key={index}  className="card my-2 mx-sm-2 col-12 col-md-6 col-lg-3 border-0" 
                    style={{ width: '15rem' }}>
                      <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                      <div className="card-body">
                        <h5 className="card-title text-center">{product.title}</h5>
                        <p className="card-text text-center">{product.text}<span className='ps-5'><FontAwesomeIcon icon={faStar} size='1x' style={{color:'yellow'}}/></span></p>
                      </div>
                    </div>
                ))}
            </div>
        </div>
  </section>
  )
}

export default ProductDetail
