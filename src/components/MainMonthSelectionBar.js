import React from 'react'
import MonthLink from './MonthLink'

export default function MainMonthSelectionBar() {
  return (
    <div className="main-month-selection-bar">
        <MonthLink monthName="styczeń"/>
        <MonthLink monthName="luty"/>
        <MonthLink monthName="marzec"/>
        <MonthLink monthName="kwiecień"/>
        <MonthLink monthName="maj"/>
        <MonthLink monthName="czerwiec"/>
        <MonthLink monthName="lipiec"/>
        <MonthLink monthName="sierpień"/>
        <MonthLink monthName="wrzesień"/>
        <MonthLink monthName="październik"/>
        <MonthLink monthName="listopad"/>
        <MonthLink monthName="grudzień"/>
    </div>
  )
}
