import City from '../src/components/City/City'
import Weather from '../src/components/Weather/Weather'
import AboutWeather from './components/AboutWeather/AboutWeather';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className='overlay'>
        <div className='container'>
          <City />
          <Weather />
          <AboutWeather />
        </div>

      </div>
    </div>
  );
}

export default App;
