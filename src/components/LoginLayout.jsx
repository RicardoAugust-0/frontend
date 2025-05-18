// LoginLayout.js
import { Outlet } from 'react-router-dom';

function LoginLayout() {
    return (
        <div className="relative z-30 flex justify-center items-center h-full">
            <Outlet />
        </div>
    );
}

export default LoginLayout;