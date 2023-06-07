import React from 'react'
import GallaryBigImg from '../../img/gallaryBigImg.png'
import GallarySmallImg from '../../img/gallarySmalImg.png'
import GallarySmallImg2 from '../../img/gallarySmalImg2.png'
import GallaryBigroImg from '../../img/gallaryBigroImg.png'
import GallaryBigroImg2 from '../../img/gallaryBigroImg2.png'
import GallaryBigroImg3 from '../../img/gallaryBigroImg3.png'

export default function Gallary() {
  return (
    <section className='gallarySection'>
      <div className="container">
        <h2 className='galleryTitle'>Галерея наших достижений</h2>
        
        <div className='gallaryContent'>
          <div className='gallaryInfo'>
            <img src={GallaryBigImg} alt="..." />
            <div className='gallaryInfo2'>
            <img src={GallaryBigroImg} alt="..."/>
            <img src={GallaryBigroImg2} alt="..." />
            </div>
          </div>

          <div className='gallaryInfos'>
            <img src={GallaryBigroImg} alt="..."  width={264} height={264} />
            <img src={GallaryBigroImg2} alt="..."  width={264} height={264} />
            <img src={GallaryBigroImg3} alt="..."  width={264} height={264} />
          </div>
        </div>
      </div>
    </section>
  )
}
