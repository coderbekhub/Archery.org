import React, {useState, useEffect} from 'react'
import { ARCHERY } from '../../tools/constants'
import { getLanguage, getText } from '../../locale'
import { Link } from 'react-router-dom'

export default function Nav() {
    // CHANGE LANGUAGE
    const changeLanguage = (e) => {
      localStorage.setItem(ARCHERY, e)
      document.location.reload(true)
    }
  
    const [active, setActive] = useState('navList')
    const navToggle = () => {
      active === 'navList' ? setActive('navList navActive') : setActive('navList')
  
      toggleIcon === 'navToggle'
      ? setToggleIcon('navToggle toggle')
      : setToggleIcon('navToggle')
    }
    
    const [toggleIcon, setToggleIcon] = useState('navToggle')
  

  return (
    <section className='navSection'>
      <div className="container">
        <nav className='nav'>
          <ul className={active}>
              <li><Link className='navLink' to='/'> {getText('home')} </Link></li>
              <li><Link className='navLink' to='/federation'>НАША ФЕДЕРАЦИЯ</Link></li>
              <li><Link className='navLink' to='/gallary'>ГАЛЕРЕЯ</Link></li>
              <li><Link className='navLink' to='/musobaqa'>СОРЕВНОВАНИЕ</Link></li>
              <li><Link className='navLink' to='/news'>НОВОСТИ</Link></li>
              <li><Link className='navLink' to='/contact'>СВЯЗЬ</Link></li>
            
              <ul className='langList'>
                <li className='langWrap d-flex align-items-center'>
                  <h5 className='nav-link d-flex align-items-center'>
                    {getLanguage() === 'en' ? <>English</> : getLanguage() === 'ru' ? <>Русский</> : <>O'zbek</>}
                  </h5>
                  <div className="wrap">
                    <p onClick={() => changeLanguage('uz')}>O'zbek</p>
                    <p onClick={() => changeLanguage('ru')}>Русский</p>
                    <p onClick={() => changeLanguage('en')}>English</p>
                  </div>
                </li>
              </ul>
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>


          {/* <ul className='active navList' >
            <li><Link className='navLink' to='/'> {getText('home')} </Link></li>
            <li><Link className='navLink' to='/federation'>НАША ФЕДЕРАЦИЯ</Link></li>
            <li><Link className='navLink' to='/gallary'>ГАЛЕРЕЯ</Link></li>
            <li><Link className='navLink' to='/musobaqa'>СОРЕВНОВАНИЕ</Link></li>
            <li><Link className='navLink' to='/news'>НОВОСТИ</Link></li>
            <li><Link className='navLink' to='/contact'>СВЯЗЬ</Link></li>
          <ul className='langList'>
            <li className='langWrap d-flex align-items-center'>
              <h5 className='nav-link d-flex align-items-center'>
                {getLanguage() === 'en' ? <>Eng</> : getLanguage() === 'ru' ? <>Рус</> : <>O'z</>}
              </h5>
              <div className="wrap">
                <p onClick={() => changeLanguage('uz')}>O'zbek</p>
                <p onClick={() => changeLanguage('ru')}>Русский</p>
                <p onClick={() => changeLanguage('en')}>English</p>
              </div>
              </li>
          </ul>
          </ul>


          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'>asasas</div>
            <div className='line2'>asasas</div>
            <div className='line3'>asasas</div>
          </div> */}
        </nav>
      </div>
    </section>
  )
}
