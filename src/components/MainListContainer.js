import React, {useState} from 'react'
import gameAlone from '../gameAlone.webp'
import premiereLogo from '../premiereLogo.svg'
import reprintLogo from '../reprintLogo.svg'
import yearLogo from '../yearLogo.svg'
import GamesArray from './GamesArray'

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
        <GamesArray arrayData={array2022} arrayName="2022" id="array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="styczeń 2022 " id="jan-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="luty 2022" id="feb-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="marzec 2022" id="mar-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="kwieciań 2022" id="apr-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="maj 2022" id="may-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="czerwiec 2022" id="jun-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="lipiec 2022" id="jul-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="sierpień 2022" id="aug-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="wrzesień 2022" id="sep-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="październik 2022" id="oct-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="listopad 2022" id="nov-array-2022"/>
        <hr/>
        <GamesArray arrayData={array2022} arrayName="grudzień 2022" id="dec-array-2022"/>
        <hr/>

        {/*
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
            */}
    </div>
  )
}
