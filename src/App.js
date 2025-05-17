import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './public/pages/Layout';
import Login from './public/pages/Login';
import './App.css'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
