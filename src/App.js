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
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub' Component={Home} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/about' Component={ About} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/cuisine' Component={Cuisine} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/arts&music' Component={ArtMusic} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/dorowet' Component={Dorowet} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/kitfo'   Component={Kitfo} />
        <Route path='/Ethiopian-Cuisine-and-Cultural-Hub/contact' Component={Contact} />
      </Routes>
    </div>
)}

export default App;
