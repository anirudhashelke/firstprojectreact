import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='a-banner'>
        <div className='container'>
            <div className='py-5'>
               <h1>YOUR SAFTEY <br />
<span style={{color:"#f1db25"}}>OUR RESPONSIBILITY</span></h1>
               <p className='py-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod magna <br /> aliqua. Ut enim ad minim veniam</p>
               <div>
                <button className='a-read'>Read more</button>
                <button className='a-button'>Get A Quote</button>
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner