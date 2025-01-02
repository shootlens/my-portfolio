import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import Header from './components/header';
import HeroSection from './components/hero-section';
import './index.css'
import AboutSection from './components/about-section';

function App() {
  return (
    <div className="background-gradient px-9 min-h-[100vh]">
      <AnimatedCursor innerSize={15}
        outerSize={8}
        color='191,240,152'
        outerAlpha={0.2}
        innerScale={0.1}
        outerScale={10}
      />
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
