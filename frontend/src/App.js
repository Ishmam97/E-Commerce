import './App.css';

import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection'
import Item from './Components/Item'
function App() {

  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <Item/>
    </div>
  );
}

export default App;
