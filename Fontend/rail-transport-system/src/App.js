import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import MapTrain from './components/pages/Map';
import Calculate from './components/pages/Calculate';
import Contact from './components/pages/Contact';
import Footer from './components/Footer(Contact)/Footer';
import History from './components/pages/History';
import Manual from './components/pages/Manual';
import Schedule from './components/pages/Schedule';
import Register from './components/pages/Register';
import SelectStation from './components/pages/SelectStation';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <br/>
      <Switch>
        <Route path='/' exact  component ={Home} />
        <Route path='/services' exact component ={Services} />
        {/* <Route path='/sign-up' exact component ={Signup}Train />
        <Route path='/sign-in' exact component ={Signin} /> */}
        <Route path='/map' exact component ={MapTrain} />
        <Route path='/calculate' exact component ={Calculate} />
        <Route path='/history' exact component ={History} />
        <Route path='/manual' exact component ={Manual} />
        <Route path='/contact' exact component ={Contact} />
        <Route path='/schedule' exact component ={Schedule} />
        <Route path='/register' exact component ={Register} />
        <Route path='/contact' exact component ={Contact}/>
        <Route path='/SelectStation' exact component ={SelectStation}/>
        
      </Switch>
      <Footer />
    </Router>

    </>
  );
}



export default App;
