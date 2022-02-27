import React from 'react'

export default function MainContentLink(props) {
  return (
    <div className='main-content-link'>
        <a href="#"><img src={props.imageLink} height="100px" width="auto"/></a>
    </div>
  )
}
