import CitySearchApp from './CitySearchApp.js';
import './App.css';

/*Implement a City Search field that takes city names */
function App() {
    
  return (
    <div className="AppPage">
        <div className="CityAppBanner">
            <h1>ZipApp</h1>
        </div>
        <div className="CitySearchApp">
            <CitySearchApp />
        </div>
    </div>
  );
}

export default App;
