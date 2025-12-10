import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <h1>Hello World</h1>
    <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/contact us'><li>Contact us</li></Link>
      <Link to='/users/123'><li>User 123</li></Link>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact us' element={<Contact/>}/>
      <Route path='/users/:id' element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;