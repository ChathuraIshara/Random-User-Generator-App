import logo from './logo.svg';
import './App.css';
import NameList from './components/pages/NameList';
import Header from './components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
     <Routes>
       <Route path="/" element={ <Home/>}></Route>
       <Route path="/namelist" element={<NameList/>}></Route>
       <Route path="/about" element={ <About/>}> </Route>
     </Routes>
     
    </BrowserRouter>
     
     
    </div>
  );
}

export default App;
