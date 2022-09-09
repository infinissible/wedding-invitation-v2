import './App.css';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';

function App() {
  return [
    <div className='App'>
      <Main />
      <Gallery />
      <Contact />
      <Map />
    </div>,
  ];
}

export default App;
