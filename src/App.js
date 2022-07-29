import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Presentation from './pages/Presentation';
import Routing from './pages/Routing';
import Conditionnel from './pages/Conditionnel';
import Listes from './pages/Listes';
import Reactivity from './pages/Reactivity';
import Props from "./pages/Props";
import Formulaires from "./pages/Formulaires";
import Redux from "./pages/Redux";
import {useDispatch} from "react-redux";
import {init} from "./store/counterSlice";

function App() {
    const dispatcher = useDispatch();

    // dispatcher(init())

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navigation/>
        <main>
          <Routes>
              <Route path='/' element={<Presentation/>} />
              <Route path='/routing' element={<Routing/>} />
              <Route path='/static' element={<Conditionnel/>} />
              <Route path='/list' element={<Listes/>} />
              <Route path='/reactivity' element={<Reactivity/>} />
              <Route path='/props' element={<Props/>} />
              <Route path='/forms' element={<Formulaires/>} />
              <Route path='/redux' element={<Redux/>} />
          </Routes>
        </main>
        <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
