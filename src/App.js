import './App.css';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans';

function App()
{
  return (
    <>
      <Header/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans/>
    </>
  );
}

export default App;
