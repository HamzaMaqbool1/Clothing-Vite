import React,{ useState } from 'react'
import Navbar from './Pages/Navbar'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router,Routes,Route,Link, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';

function FooterEnd(){
    const location=useLocation();
    const {pathname}= location;
  const [value,setValue]=useState('Enter your Email')
  const showNavbar = ['/', '/about', '/shop'].includes(pathname) || pathname.startsWith('/product/');
  return(
    <section id='footer'>
   {showNavbar && (
     <div className="container-fluid" style={{backgroundColor:'#6F6A42'}}>
     <div className="row">
       <div className="col-lg-4 p-md-5 p-3">
         <img src={logo} alt="Logo" style={{width:100,height:50}}/>
         <h3 className='text-white pt-5 fs-3 fw-bold'>Social Media</h3>
         <span className='d-flex pt-4 gap-3'>
         <a href=" "><FontAwesomeIcon icon={faTwitter} size='2x' style={{color:'white',backgroundColor:'#6F6A42'}}/></a>
         <a href=""><FontAwesomeIcon icon={faInstagram} size='2x' style={{color:'white',backgroundColor:'#6F6A42'}}/></a>
         <a href=""><FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'white',backgroundColor:'#6F6A42'}}/></a>
         </span>
       </div>
       <div className="col-lg-2 p-md-5 p-3">
           <a href="#" className='text-decoration-none'><h5 className='text-white'>Shop</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Products</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Overview</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Pricing</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Release</h5></a>
       </div>
       <div className="col-lg-2 ps-lg-2 ps-md-5 pb-md-5 pe-md-5 pt-md-5 p-3">
       <a href="" className='text-decoration-none'><h5 className='text-white'>Company</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>About us</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Contact</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>News</h5></a>
           <a href="#" className='text-decoration-none'><h5 className='text-white pt-3'>Support</h5></a>
       </div>
       <div className="col-lg-4 p-md-5 p-3">
       <a href="#" className='text-decoration-none'><h5 className='text-white'>Stay Up To Date</h5></a>
       <div className="input-group mb-3 pt-3">
       <input type="text" className="form-control input" value={value} onChange={(e)=>setValue(e.target.value)} style={{backgroundColor:'#6F6A42', color:'white'}}/>
       <span className="input-group-text" style={{backgroundColor:'#EFE8C2'}}>Submit</span>
       </div>
       </div>
     </div>
   </div>
   )}
    </section>
  );
}
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/product/:cardIndex' element={<ProductDetail/>}></Route>
        </Routes>
        <FooterEnd/>
      </Router>
    </>
  )
}

export default App
