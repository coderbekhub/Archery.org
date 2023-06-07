import React from 'react'
import CountUp from 'react-countup';
import Partner from './Partner';

export default function Indicator() {
  return (
    <section className='indicatorSection'>
      <div className='blur'></div>
      <div className="container">
        <div className='pTop'>
          <div className='indicatorText'>
            <h2 className='indicatorHeaderTitle'>Федерация стрельбы из <br /> лука Узбкистана</h2>
            <p>Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведется сериями по 3или 6 стрел Соревнования по стрельбе из лука проводятся как на открытом воздухе, так и в помещении. Стрельба на соревнованиях ведетсясериями по 3 или 6 стрел.</p>
          </div>

          <div className='indicatorContent text-center row'>
            <h2>Почему нужно выбрать нас?</h2>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={22} duration={2} delay={0} />+</h1>
              <h2>Филиалы в городе</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={278} duration={2} delay={0} />+</h1>
              <h2>Лояльные клиенты</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={800} duration={2} delay={0} />+</h1>
              <h2>Услуги, предоставляемыу</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={32} duration={2} delay={0} />+</h1>
              <h2>Лучшие эксперты</h2>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
