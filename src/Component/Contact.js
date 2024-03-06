import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='a-contact'>
        <div className='container py-5'>
            <h1 className='a-h1'>GET IN TOUCH</h1>
            <div className="row ">
                <div className='col-12 col-md-7  py-5 m-auto'>
                    <div>
                        <input type="text" placeholder='FULL NAME' />
                        <input type="text" placeholder='EMAIL' />
                        <input type="text" placeholder='PHONE NUMBER' />
                        <textarea id="exampleFormControlTextarea1" placeholder='MESSAGE' rows="5"></textarea>
                       <div className='text-center pt-4'>
                       <button className='a-button fw-bold '>SEND</button>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact