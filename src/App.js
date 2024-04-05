import './App.css';
import {React} from 'react';
import { ParticleAnimation } from './svgAnimationEngine/run';
import { Card } from './components/card/card';

function App() {
  return (
    <div className="App">
      <ParticleAnimation />
      <Card/>
    </div>
  );
}

export default App;
