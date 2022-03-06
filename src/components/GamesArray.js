import React from 'react'
import premiereLogo from '../premiereLogo.svg'
import reprintLogo from '../reprintLogo.svg'
import yearLogo from '../yearLogo.svg'

export default function GamesArray(props) {
  return (
    <div className="games-array">
        <div className='logo-container'>
            <img src={yearLogo}/>
            <div className="image-text">{props.arrayName}</div>
        </div>
        <div className='games-array-container'>
            {props.arrayData.map((item, index) =>
            <div className='item-container' key={index}>
                {item.premiere == true &&
                    <div className='premiere-or-reprint'>
                        <img src={premiereLogo}/>
                    </div>
                }
                {item.premiere == false &&
                    <div className='premiere-or-reprint'>
                        <img src={reprintLogo}></img>
                    </div>
                }
                
                <div className='item-image'>
                    <img src={item.image} width="96px" height="96px"></img>
                </div>

                <div className='item-name'>
                    <p>{item.title}</p>
                </div>

            </div>  
            )} 
        </div>
    </div>
  )
}
