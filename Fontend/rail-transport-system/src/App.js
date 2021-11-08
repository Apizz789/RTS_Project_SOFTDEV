import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Trainmap from './components/Map/Trainmap';
import TrainCalculate from './components/Calculate/TrainCalculate';
import Footer from './components/Footer(Contact)/Footer';
import TrainHistory from './components/PurchaseHistory/TrainHistory';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <br/>
      <Switch>
        <Route path='/' exact  component ={Home} />
        <Route path='/services' exact component ={Services} />
        <Route path='/sign-up' exact component ={Signup} />
        <Route path='/sign-in' exact component ={Signin} />
        <Route path='/map' exact component ={Trainmap} />
        <Route path='/calculate' exact component ={TrainCalculate} />
        <Route path='/history' exact component ={TrainHistory} />
      </Switch>
      <Footer />
    </Router>

    </>
  );
}



export default App;
