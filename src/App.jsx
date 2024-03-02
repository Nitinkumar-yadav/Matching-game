import Instructions from './component/Instructions';
import Welcome from './component/welcome';
import Begin from './component/Begin';
// import './App.css';
import { useState } from 'react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleNext = () => {
    setCurrentScreen('instructions');
  };

  const handleBack = () => {
    setCurrentScreen('begin');
    setCurrentScreen('welcome');
  };

  

  return (
    <div>
      {currentScreen === 'welcome' && <Welcome onNext={handleNext} />}
      {currentScreen === 'instructions' && (
        <Instructions currentScreen={currentScreen} onBack={handleBack} />
      )}
      {currentScreen === 'begin' && (
        <Begin currentScreen={currentScreen} onBack={handleBack} />
      )}
    </div>
  );
}
