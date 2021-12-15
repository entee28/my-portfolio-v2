import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Divider from './components/Divider';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Hero/>
    <Divider/>
      <Switch>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
