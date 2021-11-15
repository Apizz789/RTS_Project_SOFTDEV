import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import MapTrain from './components/pages/Map';
import Calculate from './components/pages/Calculate';
import Contact from './components/pages/Contact';
import Footer from './components/Footer(Contact)/Footer';
import History from './components/pages/History';
import Manual from './components/pages/Manual';
import Schedule from './components/pages/Schedule';
import Register from './components/pages/Register';
import SelectStation from './components/pages/SelectStation';
import Ticket from './components/pages/Ticket';
import ShowTicket from './components/pages/ShowTicket';
import Information from './components/pages/Information';
import CalculationResult from './components/pages/CalculationResult';
import SourceProvider from './components/Calculate/UseContextSource'
import DestProvider from './components/Calculate/UseContextDest';
import SelectStationDest from './components/pages/SelectStationDest';
import Test from './components/pages/Test';
import Flippage from './components/pages/Flippage';
import Payment from './components/pages/Payment';
import SelectSourceTic from './components/pages/SelectSourceTic';
import SourceTicProvider from './components/Buyticket/UseContextSourceTic'
import Confirm from './components/Confirm/Confirm';
import Header from './components/pages/Header';
import SelectDestTic from './components/pages/SelectDestForTic';
import DestTicProvider from './components/Buyticket/UseContextDestTic'
import CountTicProvider from './components/Buyticket/UseContextCount'
function App() {

  return (
    <SourceProvider>
    <DestProvider>
    <SourceTicProvider>
    <DestTicProvider>
    <CountTicProvider>
    <Router>
      <Navbar/>
      <br/>
      <Test/>
      <Header/>
      <Switch>
        <Route path='/home' exact  component ={Home} />
        <Route path='/' exact  component ={Home} />
        <Route path='/services' exact component ={Services} />
        <Route path='/map' exact component ={MapTrain} />
        <Route path='/calculate' exact component ={Calculate} />
        <Route path='/history' exact component ={History} />
        <Route path='/manual' exact component ={Manual} />
        <Route path='/contact' exact component ={Contact} />
        <Route path='/schedule' exact component ={Schedule} />
        <Route path='/register' exact component ={Register} />
        <Route path='/contact' exact component ={Contact}/>
        <Route path='/SelectStation' exact component ={SelectStation}/>
        <Route path='/select-station-dest' exact component ={SelectStationDest}/>
        <Route path='/ticket' exact component ={Ticket}/>
        <Route path='/select-sorce-ticket' exact component ={SelectSourceTic}/>
        <Route path='/select-dest-ticket' exact component ={SelectDestTic}/>
        <Route path='/show-ticket' exact component ={ShowTicket}/>
        <Route path='/information' exact component ={Information} />
        <Route path='/calculation-result' exact component ={CalculationResult}/>
        <Route path='/flip-page' exact component ={Flippage}/>
        <Route path='/Confirm' exact component ={Confirm}/>
        <Route path="/Confirm/:confirmcode" component={Confirm} />
        <Route path='/payment' exact component ={Payment}/>
      </Switch>
      <img src='images/trainloop.gif' style={{width: "100%",height: '80px'}} draggable="false" dragstart="false" class="unselectable"></img>
      <Footer />
    </Router>
    </CountTicProvider>
    </DestTicProvider>
    </SourceTicProvider>
    </DestProvider>
    </SourceProvider>
  );
}



export default App;
