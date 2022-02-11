
import Login from './Login'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'  element={<Login/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
