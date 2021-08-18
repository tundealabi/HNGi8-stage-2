import { AppBody } from './App.styled';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/work/Work';

function App() {
  console.log('My Name Is Alabi Akintunde');
  return (
    <>
      <Header />
      <AppBody>
        <Home />
        <About />
        <Work />
        <Contact />
      </AppBody>
    </>
  );
}

export default App;
