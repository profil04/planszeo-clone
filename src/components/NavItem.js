import React from 'react'
import '../App.css'

export default function NavItem(props) {
  return (
    <div className="nav-item">
        <a href={props.link} className="capitalize">{props.elementName}</a>
    </div>
  )
}
