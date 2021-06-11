import { Route } from 'react-router';
import './App.css';
import { Nav } from './components/Nav/Nav';
import LandingPage  from './components/LandingPage/LandingPage';
import CountryDetails from './components/CountryDetails/CountryDetails'
import AddActivity from './components/AddActivity/AddActivity';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      
      <Route  exact path="/"><LandingPage/></Route>
      <Route  path={["/home", "/country", "/add", "/about"]}><Nav/></Route>
      <Route  exact path="/home"><HomePage/></Route>
      <Route  exact path="/country/:id"><CountryDetails/></Route>     
      <Route  exact path="/add"><AddActivity/></Route>
    </div>
  );
}

export default App;
