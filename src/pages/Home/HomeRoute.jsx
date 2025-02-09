import React, { Component } from 'react'
import HeroCards from '../../components/hero/Hero'
import AboutUs from '../aboutus/AboutUs'
import HomeCard from './HomeCard'
import ClientsSection from './ClientSection'
import ServiceCard from '../services/ServiceCard'
import Services from './home-Service/Services'
import LogisticsCard from '../../components/cards/LogisticCard'

export default class HomeRoute extends Component {
  render() {
    return (
      <>
      <div className="hero" id='home'>
        <HeroCards/>
      </div>
      <div className="about">
        <HomeCard/>
      </div>
      <dic className="service">
        <Services/>
      </dic>
      <div className="client">
        <ClientsSection/>
      </div>
      <div className="reachout">
        <LogisticsCard/>
      </div>
      </>
    )
  }
}
