import React from 'react'
// import GallaryBigImg from '../../img/gallaryBigImg.png'
// import GallarySmallImg from '../../img/gallarySmalImg.png'
// import GallarySmallImg2 from '../../img/gallarySmalImg2.png'
// import GallaryBigroImg from '../../img/gallaryBigroImg.png'
// import GallaryBigroImg2 from '../../img/gallaryBigroImg2.png'
// import GallaryBigroImg3 from '../../img/gallaryBigroImg3.png'
import GalleryImg1 from '../../img/atletsNews/atletNews1.jpg'
import GalleryImg2 from '../../img/atletsNews/atletNews2.jpg'
import GalleryImg3 from '../../img/atletsNews/atletNews3.jpg'
import GalleryImg4 from '../../img/atletsNews/atletNews4.jpg'
import GalleryImg5 from '../../img/atletsNews/atletNews5.jpg'
import GalleryImg10 from '../../img/atletsNews/atletNews10.jpg'

export default function Gallary() {
  return (
    <section className='gallarySection'>
      <div className="container">
        <h2 className='galleryTitle'>Галерея наших достижений</h2>
        
        <div className='gallaryContent row'>
          <div className='gallaryInfo'>
            <div className='col-md-6 col-12'>
              <img className='galleryBigImg' src={GalleryImg10} alt="..." />
            </div>
            <div className='gallaryInfo2 col-md-6 col-6'>
              <img src={GalleryImg2} alt="..." />
              <img src={GalleryImg1} alt="..." />
            </div>
          </div>

          <div className='gallaryInfos col-md-4 col-12'>
            <img src={GalleryImg3} alt="..." />
            <img src={GalleryImg4} alt="..." />
            <img src={GalleryImg5} alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
