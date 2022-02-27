import React from 'react'

export default function SideBarLink(props) {
  return (
    <div className='side-bar-link'>
        <a href="#"><img src={props.imageLink} height="40px" width="auto"/></a>
    </div>
  )
}
