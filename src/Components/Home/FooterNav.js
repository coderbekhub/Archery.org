import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../../locale'
import FooterBrand from '../../img/brandArchery.svg'

export default function FooterNav() {
  return (
    <section className='footerNavSection'>
      <div className="container">
      <nav className='footerNav'>
        <div>
          <img src={FooterBrand} alt="..." />
          <h2>Федерация стрелъбы из лука Узбекистан</h2>
        </div>
          <ul className='footerList'>
            <li><Link className='FooterLink' to='/'> {getText('home')} </Link></li>
            <li><Link className='FooterLink' to='/federation'>НАША ФЕДЕРАЦИЯ</Link></li>
            <li><Link className='FooterLink' to='/gallary'>ГАЛЕРЕЯ</Link></li>
            <li><Link className='FooterLink' to='/musobaqa'>СОРЕВНОВАНИЕ</Link></li>
            <li><Link className='FooterLink' to='/news'>НОВОСТИ</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
