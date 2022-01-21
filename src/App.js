import Todo from './components/Todo';
import { GlobalStyle } from './App.styles';
import { useEffect, useState } from 'react/cjs/react.development';
import { size } from './App.styles';

function App() {
  // !test

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
        return 40;
      }
    });
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize, numberOfChar]);
  // !test
  return (
    <>
      <GlobalStyle />
      <Todo numberOfChar={numberOfChar} />
    </>
  );
}

export default App;
