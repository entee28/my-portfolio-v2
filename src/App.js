import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
