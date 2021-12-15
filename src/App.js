import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
