import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine';
import Dorowet from './pages/Dorowet';
import Kitfo from './pages/Kitfo';
import ArtMusic from './pages/Art&Music';
import Contact from './pages/Contact';


function App() {
  return (
    <div className='App'>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ethiopian Cuisine and Culture Hub</title>
      </head>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path="/about" Component={ About} />
        <Route path='/cuisine' Component={Cuisine} />
        <Route path='/arts&music' Component={ArtMusic} />
        <Route path='/dorowet' Component={Dorowet} />
        <Route path='/kitfo'   Component={Kitfo} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </div>
)}

export default App;
