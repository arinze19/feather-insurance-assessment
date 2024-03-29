import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Modal from './components/UI/Modal';
import Navbar from './components/UI/Navbar';
import HomePage from './pages/HomePage';
import PolicyPage from './pages/PolicyPage';
import PolicyDetailPage from './pages/PolicyDetailPage';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/policies' element={<PolicyPage />} />
      <Route path='/policies/:id' element={<PolicyDetailPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
    <Modal />
  </BrowserRouter>
);

export default App;
