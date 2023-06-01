import React, {useState, useEffect} from 'react'
import { getLanguage, getText } from '../locale'
import { ARCHERY } from '../tools/constants'
import SearchIcon from '../img/search.svg'
import ArcheryBrand from '../img/brandArchery.svg'

export default function Header() {
  const changeLanguage = (e) => {
    localStorage.setItem(ARCHERY, e)
    document.location.reload(true)
  }

  return (
    <section className='headerSection'>
      <div className="container">
        <div className='d-flex d-flex align-items-center justify-content-between'>
          <div className='headerBrand d-flex align-items-center'>
            <img src={ArcheryBrand} alt="..." />
            <h2>Федерация стрельбы из лука Узбекистана</h2>
          </div>
          <div className="headerContent d-flex align-items-center">
            <a href="tel:+998977770777">+998 97 777 07 77</a>

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

              <img src={SearchIcon} alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
