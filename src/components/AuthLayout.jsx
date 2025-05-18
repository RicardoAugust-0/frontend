import BackgroundVideo from '../components/BackgroundVideo';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <BackgroundVideo />
            {/* Conteúdo das páginas de autenticação */}
            <div className="relative z-30 flex justify-center items-center h-full">
                <Outlet /> {/* O Outlet renderiza o componente da rota correspondente */}
            </div>
        </div>
    );
}

export default AuthLayout;