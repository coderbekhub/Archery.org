import React from 'react'
import atletsImg from '../../img/atletsImg.svg'
import AtletsAva from '../../img/archeryAva/ava1.png'
import AtletsAva2 from '../../img/archeryAva/ava2.png'
import AtletsAva3 from '../../img/archeryAva/ava3.png'
import AtletsAva4 from '../../img/archeryAva/ava4.png'

export default function Atlet() {
  return (
    <section className='atletsSection'>
      <div className="container">
        <h2>Наши атлеты</h2>
        <div className='row text-center atletsContent'>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva2} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva3} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva4} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva2} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Alisher Qodirov</p>
          </div>
        </div>
      </div>
    </section>
  )
}
