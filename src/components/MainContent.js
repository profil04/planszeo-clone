import React from 'react'
import '../App.css'
import MainContentLink from './MainContentLink'
import Title from './Title'
import boardNewsLogo from '../boardNewsLogo.png'
import onTableLogo from '../onTableLogo.png'
import planszeoLogo from '../planszeoLogo.png'
import MainYearSelactionBar from './MainYearSelactionBar'
import MainMonthSelectionBar from './MainMonthSelectionBar'
import MainListContainer from './MainListContainer'

export default function MainContent(props) {
  return (
    <div className="main-content">
        <Title/>
        <div className='main-content-links-container'>
          <MainContentLink imageLink={boardNewsLogo} />
          <MainContentLink imageLink={onTableLogo} />
          <MainContentLink imageLink={planszeoLogo} />
        </div>
        <MainYearSelactionBar/>
        <MainMonthSelectionBar/>
        <MainListContainer term={props.term} array2022={props.array2022}/>
        <MainYearSelactionBar/>
        <MainMonthSelectionBar/>
    </div>
  )
}
