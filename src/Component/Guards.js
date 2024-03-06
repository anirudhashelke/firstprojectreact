import React from 'react'

const Guards = () => {
  return (
    <>
    <section className='container py-5 text-center'>
    <h1 className='a-h1 text-dark pb-5'>OUR GUARDS</h1>
      <div className="row d-flex justify-content-center">
          <div className='col-12 col-md-3'>
            <div className='a-guards'>
              <div className='a-guard'>
                <h5>
                Martin Anderson
                </h5>
                <h6>supervisor</h6>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <div className='a-guards1'>
              <div className='a-guard'>
                <h5>
                Denny Butler
                </h5>
                <h6>supervisor</h6>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <div className='a-guards2'>
              <div className='a-guard'>
                <h5>
                Nathan Mcpherson
                </h5>
                <h6>supervisor</h6>
              </div>
            </div>
          </div>
      </div>
      <button className='a-button mt-5 '>View All</button>
    </section>
    </>
  )
}

export default Guards