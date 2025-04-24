import { Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Home from '../pages/Home/index'
import Simulador from '../pages/Simulador/index';

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/simulacao" element={<Simulador/>}></Route>
    </Routes>
  )
}

