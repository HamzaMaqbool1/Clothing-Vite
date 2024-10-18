import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Login = () => {
  return (
    <section id='login'>
      <div className="container-fluid" style={{backgroundColor:"#EFE8C2"}}>
        <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-3">
                <h3 className='text-center fs-4 fw-bold'>Login</h3>
                <h5 className='fs-6 fw-semiboldbold'>Enter your login and password to enter</h5>
                <form>
                <div className="mb-3">
                   <input type="email" className="form-control" defaultValue="Username or enter email" />
                 </div>
                <div className="d-flex flex-column mb-3">
                <input type="password" className="form-control" defaultValue="Password"/>
               <a href="#" className='text-decoration-none text-muted ms-auto'>forget password?</a>
                </div>
                <div className='btn btn-outline text-center rounded w-100' style={{border:'1px solid black'}}>Login</div>
                <div className='btn rounded w-100 d-flex flex-row align-items-center justify-content-around  mt-3 p-0' style={{backgroundColor:'#272727'}}>
                    <FontAwesomeIcon className='rounded' icon={faGoogle} size='2x' style={{background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05)'}}/>
                    <p className='pt-3 text-white'> Or,sign-in with Google</p>
                </div>
                <p className=' fs-6 fw-semibold text-center pt-3'>Not A Member Yet?<span className='text-muted'>Register!</span></p>
              </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login
