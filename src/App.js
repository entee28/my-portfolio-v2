import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} activeClassName="selected-nav" path='/about' />
        <Route component={Projects} path='/projects' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
