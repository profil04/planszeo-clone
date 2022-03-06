import React from 'react'
import MonthLink from './MonthLink'

export default function MainMonthSelectionBar() {
  return (
    <div className="main-month-selection-bar">
        <MonthLink monthName="styczeń" monthLink="#jan-array-2022"/>
        <MonthLink monthName="luty" monthLink="#feb-array-2022"/>
        <MonthLink monthName="marzec" monthLink="#mar-array-2022"/>
        <MonthLink monthName="kwiecień" monthLink="#apr-array-2022"/>
        <MonthLink monthName="maj" monthLink="#may-array-2022"/>
        <MonthLink monthName="czerwiec" monthLink="#jun-array-2022"/>
        <MonthLink monthName="lipiec" monthLink="#jul-array-2022"/>
        <MonthLink monthName="sierpień" monthLink="#aug-array-2022"/>
        <MonthLink monthName="wrzesień" monthLink="#sep-array-2022"/>
        <MonthLink monthName="październik" monthLink="#oct-array-2022"/>
        <MonthLink monthName="listopad" monthLink="#nov-array-2022"/>
        <MonthLink monthName="grudzień" monthLink="#dec-array-2022"/>
    </div>
  )
}
