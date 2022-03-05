import React from 'react'
import FooterCenterContainer from './FooterCenterContainer'
import '../App.css'
import ScrollBackToTop from './ScrollBackToTop'

export default function Footer() {
  return (
    <div className='footer'>
        <FooterCenterContainer/>
        <ScrollBackToTop />
    </div>
  )
}
