import { Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Home from '../pages/page01/index'

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
  )
}

