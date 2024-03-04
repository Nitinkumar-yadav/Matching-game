import { useState } from 'react';
import Welcome from '../01Screen';
import Instructions from '../02Screen';
import Begin from '../03Screen';
import Playgame from '../04Screen';
import GameBoard from '../05Screen';



const Home=()=> {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleNext = () => {
    if (currentScreen === 'welcome') {
      setCurrentScreen('instructions');
    } else if (currentScreen === 'instructions') {
      setCurrentScreen('begins');
    } else if (currentScreen === 'begins') {
      setCurrentScreen('playgame');
    }else if (currentScreen === 'begins') {
      setCurrentScreen('gameboard');
    }
  };

  const handleBack = () => {
    if (currentScreen === 'instructions') {
      setCurrentScreen('welcome');
    } else if (currentScreen === 'begins') {
      setCurrentScreen('instructions');
    } else if (currentScreen === 'playgame') {
      setCurrentScreen('begins');
    }else if (currentScreen === 'begins') {
    setCurrentScreen('gameboard');
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
      {currentScreen === 'playgame' && (
        <Playgame currentScreen={currentScreen} onNext={handleNext} onBack={handleBack} />
      )}
            {currentScreen === 'gameboard' && (
        <GameBoard currentScreen={currentScreen} onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
}
export default Home;
