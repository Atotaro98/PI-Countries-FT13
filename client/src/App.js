import { Route } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Route  exact path="/"><Home/></Route>
      <Route  exact path="/country/:id"><CountryDetails/></Route>
    </div>
  );
}

export default App;
