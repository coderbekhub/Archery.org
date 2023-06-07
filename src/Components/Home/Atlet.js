import React from 'react'
import atletsImg from '../../img/atletsImg.svg'

export default function Atlet() {
  return (
    <section className='atletsSection'>
      <div className="container">
        <h2>Наши атлеты</h2>
        <div className='row text-center atletsContent'>
          <div className='col-12 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <img src={atletsImg} alt="..." />
            <p>Alisher Qodirov</p>
          </div>
        </div>
      </div>
    </section>
  )
}
