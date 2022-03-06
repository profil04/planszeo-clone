import React from 'react'

export default function MonthLink(props) {
  return (
    <div className='month-link'>
        <a href={props.monthLink}>{props.monthName}</a>
    </div>
  )
}
