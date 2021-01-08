import './App.css';
import Card from './Components/Card'
import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <Card/>
    </div>
  );
}

export default App;
