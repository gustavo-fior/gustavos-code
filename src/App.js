import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from './components/ThemeSwitcher';
import { dark, light } from './UI/themes';
import { useState } from 'react';
import { BtnTema } from './UI/components';

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema(tema => !tema);
  };

  return (
    <>
      <ThemeProvider theme={tema ? light : dark}>
        <BtnTema onClick={toggleTema}>
          <ThemeSwitcher tema={tema} />
        </BtnTema>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
