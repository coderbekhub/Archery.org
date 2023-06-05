import React from 'react'
import { Link } from 'react-router-dom'
import NewsImg from '../../img/newsImg.png'

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
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>Подробнее</Link>
              <span>12 марта 2023 г.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
