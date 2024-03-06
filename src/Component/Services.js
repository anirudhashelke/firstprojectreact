import React from 'react'

const Services = () => {
  return (
    <>
    <section className='a-service'>
        <div className='container py-5 '>
            <h1 className='a-h1'>OUR SERVICES</h1>
            <div className="row py-5 d-flex justify-content-center  ">
                <div className='col-12 col-md-3'>
                    <div className='text-center bg-white py-5 px-2'>
                    <h6>HOME SECURITY</h6>
                    <p className='py-4'>Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.</p>
                    <button className='a-button'>Read More</button>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='text-center bg-white py-5 px-2'>
                    <h6>OFFICE SECURITY</h6>
                    <p className='py-4'>Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.</p>
                    <button className='a-button'>Read More</button>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='text-center bg-white py-5 px-2'>
                    <h6>BODYGUARD</h6>
                    <p className='py-4'>Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.</p>
                    <button className='a-button'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services