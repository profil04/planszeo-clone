import React from 'react'
import YearLink from './YearLink'

export default function MainYearSelactionBar() {
  return (
    <div className='main-year-selection-bar'>
        <YearLink yearName="2021"/>
        <YearLink yearName="2022"/>
    </div>
  )
}
