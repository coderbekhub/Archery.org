import React from 'react'
import { Link } from 'react-router-dom'
import NewsImg from '../../img/atletsNews/atletNews1.jpg'
import NewsImg2 from '../../img/atletsNews/atletNews2.jpg'
import NewsImg3 from '../../img/atletsNews/atletNews3.jpg'
import NewsImg4 from '../../img/atletsNews/atletNews4.jpg'
import NewsImg5 from '../../img/atletsNews/atletNews5.jpg'
import NewsImg6 from '../../img/atletsNews/atletNews6.jpg'
import NewsImg7 from '../../img/atletsNews/atletNews7.jpg'
import NewsImg8 from '../../img/atletsNews/atletNews8.jpg'
import NewsImg9 from '../../img/atletsNews/atletNews9.jpg'
import NewsImg10 from '../../img/atletsNews/atletNews10.jpg'
import NewsImg11 from '../../img/atletsNews/atletNews11.jpg'
import AboutUsImg from '../../img/aboutUsImg.png'

export default function HomeNews() {
  return (
    <section className='HomeNewsSection'>
      <div className="container">
        <div className='HomeNewsText'>
          <h2>Последние новости</h2>
          <Link className='allNews' to='/allnews'>Все новости 
            <svg width="8" height="auto" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </Link>
        </div>
        <div className='row HomeNewsContent'>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg2} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg11} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg8} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg6} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg5} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg4} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
        </div>

        {/* ABOUT US */}

        <div className='aboutUsContent row '>
          <div className='aboutUsInfo col-12 col-md-6'>
            <img src={NewsImg3} alt="..." />
          </div>
          <div className='aboutUsInfo col-12 col-md-6'>
            <h2>Немного о нас</h2>
            <p className='test'>Стрельба из лука – олимпийский вид спорта, в котором спортсмены соревнуются в точности стрельбы из лука. Победителем в стрельбе из лука является спортсмен или команда, которая наберёт больше очков, согласно правилам соревнований. Соревнования по стрельбе из лука проводятся как между мужчинами, так и между женщинами. </p>
            <p>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел. </p>
            <p>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3 или 6 стрел. </p>
          </div>
        </div>
      </div>
    </section>
  )
}
