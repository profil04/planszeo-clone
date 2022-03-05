import React, {useState} from 'react'
import gameAlone from '../gameAlone.webp'
import premiereLogo from '../premiereLogo.svg'
import reprintLogo from '../reprintLogo.svg'
import logo2022 from '../logo2022.svg'

export default function MainListContainer() {

    const [array2022, setArray2022] = useState([
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
    ])

    const [array20221, setArray20221] = useState([
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameAlone, title: "Alone"},
    ])

  return (
    <div className='main-list-container'>
        <div className='logo-2022'>
            <img src={logo2022}/>
            <div className="image-text">2022</div>
        </div>
        <div className='array-2022'>
            {array2022.map((item, index) =>
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

                <div className='itemName'>
                    <p>{item.title}</p>
                </div>

            </div>  
            )} 
        </div>
        <div className='logo-2022'>
            <img src={logo2022}/>
            <div className="image-text">2022</div>
        </div>
        <div className='array-20221'>
            {array2022.map((item, index) =>
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

                <div className='itemName'>
                    <p>{item.title}</p>
                </div>

            </div>  
            )} 
        </div>
    </div>
  )
}
