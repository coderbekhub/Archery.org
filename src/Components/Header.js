import React from 'react'
// import React, {useState, useEffect} from 'react'
// import { DESIGN_CREATORS } from '../tools/constants'
import SearchIcon from '../img/search.svg'

export default function Header() {
  const changeLanguage = (e) => {
    // localStorage.setItem(DESIGN_CREATORS, e)
    // document.location.reload(true)
  }

  return (
    <section className='headerSection'>
      <div className="container">
        <div className="headerContent">
          <a href="tel:+998977770777">+998 97 777 07 77</a>

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

            <img src={SearchIcon} alt="..." />

        </div>
      </div>
    </section>
  )
}
