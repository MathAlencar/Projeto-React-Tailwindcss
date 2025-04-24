import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import '../style/App.css';

// lazy imports
const Home = lazy(() => import('../pages/Home/index'));
const Simulador = lazy(() => import('../pages/Simulador/index'));

export default function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulacao" element={<Simulador />} />
      </Routes>
    </Suspense>
  );
}
