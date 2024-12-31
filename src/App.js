import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import Header from './components/header';
import HeroSection from './components/hero-section';
import './index.css'

function App() {
  return (
    <div className="background-gradient">
      <AnimatedCursor innerSize={15}
        outerSize={8}
        color='191,240,152'
        outerAlpha={0.2}
        innerScale={0.1}
        outerScale={10}
      />
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
