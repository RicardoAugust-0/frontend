import { Routes, Route } from 'react-router-dom';
import Dashboard from './public/pages/Dashboard'
import Login from './public/pages/Login';
import './App.css'

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dasboard' element={<Dashboard />} />
        </Routes>
    );
}
