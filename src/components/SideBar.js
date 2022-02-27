import React from 'react'
import '../App.css'
import boardNewsLogo from '../boardNewsLogo.png'
import onTableLogo from '../onTableLogo.png'
import planszeoLogo from '../planszeoLogo.png'
import SideBarLink from './SideBarLink'
import MonthLink from './MonthLink'
import YearLink from './YearLink'

export default function SideBar() {
  return (
    <div className='side-bar'>
        <SideBarLink imageLink={boardNewsLogo} />
        <SideBarLink imageLink={onTableLogo} />
        <SideBarLink imageLink={planszeoLogo} />
        <YearLink yearName="2021"/>
        <YearLink yearName="2022"/>
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
