import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Exchanges } from './components/Exchanges';
import {CoinDetails} from "./components/CoinDetails";
import {Coins} from "./components/Coins";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/coin/id' element={<CoinDetails.jsx/>}/>
      </Routes>
    </Router>
  );
}

export default App;
