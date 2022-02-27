import React from 'react'
import NavItem from './NavItem'
import SearchBar from './SearchBar'
import LogoAndName from './LogoAndName'
import '../App.css'

export default function TopNavBar() {
  return (
    <nav className="top-nav-bar">
        <LogoAndName/>
        <SearchBar/>
        <NavItem elementName="nowości" icon="" link="#"/>
        <NavItem elementName="rankingi" link="#"/>
        <NavItem elementName="o planszeo" link="#"/>
        <NavItem elementName="współpraca" link="#"/>
        <NavItem elementName="blog" icon="" link="#"/>
    </nav>
  )
}
