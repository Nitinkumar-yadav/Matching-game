import { useState } from 'react';
import Welcome from '../welcome';
import Instructions from '../Instructions';
import Begin from '../Begin';
import playGame from '../playGame';

const Home=()=> {
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
        <Instructions currentScreen={currentScreen} onNext={handleNext} onBack={handleBack} />
      )}
      {currentScreen === 'begins' && (
        <Begin currentScreen={currentScreen} onNext={handleNext} onBack={handleBack} />
      )}
      {currentScreen === 'playGame' && (
        <playGame currentScreen={currentScreen} onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
}
export default Home;
