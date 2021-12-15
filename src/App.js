import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Hero/>
      <Switch>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
