import React from 'react'

export default function FooterBottom() {
  return (
    <section className='footerBottom'>
      <div className="container">
        <div className='footerBottomContent row'>
          <div className='bottom30 col-12 col-md-6 col-xl-3'>
            <h2>Контакты</h2>
            <a className='footerBottomInfo' href="tel:+998977770777">
              <i class='bx bx-phone-call' ></i>
              +998909796568
            </a>
            <a className='footerBottomInfo' href="uaf.cfflce@gmail.com">
              <i class='bx bx-envelope'></i>
              uaf.cfflce@gmail.com
            </a>
          </div>
          <div className='bottom30 col-12 col-md-6 col-xl-3'>
            <h2>Адрес</h2>
            <p>Узбекистан г.Ташкент</p>
            <p>Юнусабадский  р-н , 18</p>
          </div>
          <div className='bottom20 col-12 col-md-6 col-xl-3'>
            <h2>Рабочее вреья</h2>
            <p>09:00 - 20:00 без выходных</p>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <div className='footerSocialLink'>
              <a href="#">
                <i class='bx bxl-telegram'></i>
              </a>
              <a href="#">
                <i class='bx bxl-instagram-alt' ></i>
              </a>
              <a href="#">
                <i class='bx bxl-facebook-circle'></i>
              </a>
            </div>
            <p>При обнаруже ошибки на сайте. и нажмите Ctr + Enter для уведомления адинстрации</p>
          </div>
        </div>
      </div>
    </section>
  )
}
