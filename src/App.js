import './App.css';
import TopNavBar from './components/TopNavBar';
import MobileAppLinkContainer from './components/MobileAppLinkContainer';
import CalendarLinkContainer from './components/CalendarLinkContainer';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <MobileAppLinkContainer/>
      <CalendarLinkContainer/>
      <SideBar/>
      <MainContent/>
      <Footer/> 
    </div>
  );
}

export default App;
