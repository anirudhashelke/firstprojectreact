import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <>
   <div>
   <header >
    <div className='container-fluid '>
      <div className="row a-headers py-2" style={{background:"#1c1c1c"}}>
        <div className='col-12 col-md-4 a-head '>
            <div className='  d-flex align-items-center '>
                <h5> <FaLocationDot className='a-icons' />Lorem ipsum dolor sit amet,</h5> 
            </div>
        </div>
        <div className='col-12 col-md-4 a-head '>
            <div className='  d-flex align-items-center justify-content-center'>
                <h5><IoCallSharp className='a-icons' />Call : +01 1234567890</h5>
            </div>
        </div>
        <div className='col-12 col-md-4 a-head'>
            <div className= '  d-flex align-items-center justify-content-end'>
                <h5><CiMail className='a-icons' />mail@domain.com</h5>
            </div>
        </div>
      </div>
      </div>
   <div className='a-nav container-fluid '>
   <div className="row d-flex a-under justify-content-between px-3 py-4">
        <div className='col-12 col-md-2'>
            <div className='a-gau' style={{fontSize:"24px",color:"#fff",fontWeight:"700"}}>Guarder</div>
        </div>
        <div className='col-12 col-md-5'>
            <nav>
               <ul>
               <li><a className='a-nav-home' href="#">HOME</a></li>
                <li><a href="">ABOUT</a></li>
               
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">GUARDS</a></li>
                <li><a href="#">CONTACT US</a></li>
               </ul>
            </nav>
        </div>
    </div>
   </div>
    </header>
   </div>
    </>
  )
}

export default Header