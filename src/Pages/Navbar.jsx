import React,{useState} from 'react'
import logo from '../images/logo.png'
import men from '../images/IMG-2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [active, setActive] = useState('home');
    const location=useLocation();
    const {pathname}= location;
    const showNavbar = ['/', '/about', '/shop'].includes(pathname) || pathname.startsWith('/product/');
    const handleUpdate=()=>{
        switch(pathname){
              case '/':
                return(
                    <>
                    <div className="row">
                    <div className="col-md-6 p-md-5">
                        <h2 style={{color:'#6F6A42'}} className='display-3 fw-semibold ps-sm-5 p-3'>Uncover And Cultivate Your Distinctive Style</h2>
                        <p className='lead lh-lg ps-sm-5 ps-3 pb-md-5'>Lorem ipsum dolor sit amet consectetur. Faucibus odio gravida amet tellus adipiscing donec adipiscing dignissim.</p>
                        <button className='btn ms-sm-5 ms-3 ps-5 pe-5 pt-3 pb-3' style={{backgroundColor:'#6F6A42', color:'white'}}>Explore now</button>
                    </div>
                    <div className="col-md-6 ps-5  pt-5 pb-0 pe-5">
                        <img  className="img-fluid rounded-top" src={men} alt="Men Clothing" style={{width:'100%',height:'100%'}}/>
                    </div>
                </div>
                </>
                );
            default:
                'break';
        }    
    }
    const handleUpdate1=()=>{
        switch(pathname){
            case '/shop':
                    return(
                        <>
                        <div className="search-container ms-5 me-5"> <div className="search-box">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <span className="search-text">Enter text</span></div></div>
                        </>
                    );
              case '/product/':
                      return(
                      <>
                      <div className="search-container ms-5 me-5"> <div className="search-box">
                      <FontAwesomeIcon icon={faSearch} className="search-icon" />
                      <span className="search-text">Enter text</span></div></div>
                      </>
                      );
            default:
                break;
        }
    }

    const handleClick = (page) => {
      setActive(page);
    };
    const navbarBackgroundColor = (pathname === '/shop' || pathname === '/about' || pathname === '/product' ? 'white' : '#EFE8C2');
  return (
    <section>
     {showNavbar && (
      <div className="container-fluid" id='header' style={{backgroundColor:navbarBackgroundColor}}>
      <div className="row">
      <nav className="navbar navbar-expand-lg">
<div className="container-fluid">
  <Link className="navbar-brand d-flex" to={pathname} style={{backgroundColor:'#F8F8F8'}}><img src={logo} alt="" width={100} height={50}/>{handleUpdate1()}</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li
      className={active === 'home' ? 'active' : ''}
      onClick={() => handleClick('home')}><Link
        className={`nav-link ${active === 'home' ? 'active-link' : ''}`}to="/"
        style={active === 'home' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: '#224F34' }}
      >Home</Link></li>
    <li className={active === 'shop' ? 'active' : ''}onClick={() => handleClick('shop')}><Link
        className={`nav-link ${active === 'shop' ? 'active-link' : ''}`}
        to="/shop"style={active === 'shop' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: '#224F34' }}>Shop</Link></li>
    <li
      className={active === 'about' ? 'active' : ''}
      onClick={() => handleClick('about')}>
      <Link
        className={`nav-link ${active === 'about' ? 'active-link' : ''}`}
        to="/about"
        style={active === 'about' ? { fontSize: 'larger', fontFamily: 'Arial, Helvetica, sans-serif', textDecoration: 'underline', color: '#224F34' } : { color: '#224F34' }}>
        About us</Link></li>
  </ul>
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 pe-5'>
    <li><Link className="nav-link" to="/Basket" style={{color:'#224F34'}}><FontAwesomeIcon icon={faShopify} size='2x'/></Link></li>
<li ><Link to="/login"><button className='btn btn-outline-success text-black'>Log In</button></Link></li>
    </ul>
  </div>
</div>
</nav>
      </div>
      {handleUpdate()}
   </div>
     )}
    </section>
  )
}

export default Navbar
