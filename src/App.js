import Todo from './components/Todo';
import { GlobalStyle } from './App.styles';
import { useEffect, useState } from 'react';
import { size } from './App.styles';

function App() {
  // build made
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [numberOfChar, setNumberOfChar] = useState(20);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setNumberOfChar(() => {
      if (screenWidth > size.mobileXL) {
        return 60;
      } else if (screenWidth > size.mobileL) {
        return parseInt((screenWidth / 100) * 8.3);
      } else if (screenWidth > size.mobileM) {
        return parseInt((screenWidth / 100) * 7.5);
      } else {
        return parseInt((screenWidth / 100) * 6);
      }
    });
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize, numberOfChar]);
  return (
    <>
      <GlobalStyle />
      <Todo numberOfChar={numberOfChar} />
    </>
  );
}

export default App;
