import './App.css';
import TopNavBar from './components/TopNavBar';
import MobileAppLinkContainer from './components/MobileAppLinkContainer';
import CalendarLinkContainer from './components/CalendarLinkContainer';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import ScrollBackToTop from './components/ScrollBackToTop';
import React, { useState } from 'react';
import gameAlone from './game-alone.webp'
import gameIssVanguard from './game-iss-vanguard.webp'
import premiereLogo from './premiereLogo.svg'
import reprintLogo from './reprintLogo.svg'
import yearLogo from './yearLogo.svg'
import gameRaceForTheGalaxy from './game-race-for-the-galaxy.webp'
import gameRollPlayer from './game-roll-player.webp'
import gameFrostpunk from './game-frostpunk.webp'
import gameSukcesorzy from './game-sukcesorzy.webp'
import gameSmartphoneInc from './game-smartphone-inc.webp'
import gamePragaCaputRegni from './game-praga.webp' 
import gameMurHadriana from './game-mur.webp'

function App() {

  const array2022 = ([
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameIssVanguard, title: "Iss Vanguard"},
        {premiere: true, image: gameRaceForTheGalaxy, title: "Race For The Galaxy"},
        {premiere: false, image: gameRollPlayer, title: "Roll Player"},
        {premiere: true, image: gameFrostpunk, title: "Frostpunk"},
        {premiere: false, image: gameSukcesorzy, title: "Sukcesorzy"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: false, image: gameRollPlayer, title: "Roll Player"},
        {premiere: false, image: gameSukcesorzy, title: "Sukcesorzy"},
        {premiere: false, image: gameSmartphoneInc, title: "Smartphone Inc"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameMurHadriana, title: "Mur Hadriana"},
        {premiere: true, image: gamePragaCaputRegni, title: "Praga Caput Regni"},
        {premiere: true, image: gameAlone, title: "Alone"},
        {premiere: true, image: gameMurHadriana, title: "Mur Hadriana"},
    ])

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (searchTerm) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newGamesList = array2022.filter((game) => {
        return Object.values(game).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newGamesList);
    }
    else {
      setSearchResults(array2022);
    }
  }

  return (
    <div className="App">
      <TopNavBar term={searchTerm} searchKeyword={searchHandler}/>
      <MobileAppLinkContainer/>
      <CalendarLinkContainer/>
      <SideBar/>
      <MainContent term={searchTerm} searchKeyword={searchHandler} array2022={searchTerm.length < 1 ? array2022 : searchResults}/>
      <Footer/> 
      <ScrollBackToTop/>
    </div>
  );
}

export default App;
