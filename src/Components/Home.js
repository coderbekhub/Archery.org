import React from 'react'
import Header from './Home/Header'
import Nav from './Home/Nav'
import Hero from './Home/Hero'
import HomeNews from './Home/HomeNews'
import Indicator from './Home/Indicator'
import Partner from './Home/Partner'
import Gallary from './Home/Gallary'
import Atlet from './Home/Atlet'
import ArcheryMaps from './Home/ArcheryMaps'
import FooterNav from './Home/FooterNav'

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <HomeNews />
      <Indicator />
      <Partner />
      <Gallary />
      <Atlet />
      <ArcheryMaps />
      <FooterNav />
    </>
  )
}
