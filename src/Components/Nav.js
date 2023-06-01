import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locale'

export default function Nav() {
  return (
    <section className='navSection'>
      <div className="container">
        <nav className='nav'>
          <ul>
            <li><Link className='navLink' to='/'> {getText('home')} </Link></li>
            <li><Link className='navLink' to='/federation'>НАША ФЕДЕРАЦИЯ</Link></li>
            <li><Link className='navLink' to='/gallary'>ГАЛЕРЕЯ</Link></li>
            <li><Link className='navLink' to='/musobaqa'>СОРЕВНОВАНИЕ</Link></li>
            <li><Link className='navLink' to='/news'>НОВОСТИ</Link></li>
            <li><Link className='navLink' to='/contact'>СВЯЗЬ</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
