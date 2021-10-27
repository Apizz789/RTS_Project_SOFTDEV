import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Trainmap from './components/Map/Trainmap';
import TrainCalculate from './components/Calculate/TrainCalculate';
import Footer from './components/Footer(Contact)/Footer';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component ={Home} />
        <Route path='/services' exact component ={Services} />
        <Route path='/sign-up' exact component ={Signup} />
        <Route path='/sign-in' exact component ={Signin} />
        <Route path='/map' exact component ={Trainmap} />
        <Route path='/calculate' exact component ={TrainCalculate} />
      </Switch>
      <Footer />
    </Router>

    </>
  );
}



export default App;
