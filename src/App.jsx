import Welcome from './component/welcome';
import Instructions from './component/Instructions';
import Begin from './component/Begin';
import playGame from './component/playGame';
import './App.css';
import { useState } from 'react';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleNext = () => {
    if (currentScreen === 'welcome') {
      setCurrentScreen('instructions');
    } else if (currentScreen === 'instructions') {
      setCurrentScreen('begins');
    } else if (currentScreen === 'begins') {
      setCurrentScreen('playgame');
    }
  };

  const handleBack = () => {
    if (currentScreen === 'instructions') {
      setCurrentScreen('welcome');
    } else if (currentScreen === 'begins') {
      setCurrentScreen('instructions');
    } else if (currentScreen === 'playgame') {
      setCurrentScreen('begins');
    }
  };

  return (
    <div>
      {currentScreen === 'welcome' && <Welcome onNext={handleNext} />}
      {currentScreen === 'instructions' && (
        <Instructions currentScreen={currentScreen} onBack={handleBack} />
      )}
      {currentScreen === 'begins' && (
        <Begin currentScreen={currentScreen} onBack={handleBack} />
      )}
      {currentScreen === 'playgame' && (
        <playGame currentScreen={currentScreen} onBack={handleBack} />
      )}
    </div>
  );
}
