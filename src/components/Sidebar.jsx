// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Cow,
    Droplets,
    Package,
    User,
    ArrowLeftFromLine
} from 'lucide-react';

function Sidebar() {
    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen flex flex-col shadow-md">
            <div className="p-4 flex items-center justify-center">
                <Link to="/dashboard" className="text-xl font-bold">
                    <img src="/imgs/logo-moovox-branco.png" alt="Moovox Logo" className="h-8" />
                    <span className="ml-2">Moovox</span>
                </Link>
            </div>
            <nav className="mt-6">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <LayoutDashboard className="mr-2 w-5 h-5" />
                    Dashboard
                </NavLink>
                <NavLink
                    to="/usuarios"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <Users className="mr-2 w-5 h-5" />
                    Usuários
                </NavLink>
                <NavLink
                    to="/animais"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <Cow className="mr-2 w-5 h-5" />
                    Animais
                </NavLink>
                <NavLink
                    to="/vacinas"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <Droplets className="mr-2 w-5 h-5" />
                    Vacinas
                </NavLink>
                <NavLink
                    to="/aplicacoes"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <Package className="mr-2 w-5 h-5" />
                    Aplicações
                </NavLink>
                <NavLink
                    to="/meu-perfil"
                    className={({ isActive }) =>
                        `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                    }
                >
                    <User className="mr-2 w-5 h-5" />
                    Meu Perfil
                </NavLink>
                <NavLink
                    to="/sair"
                    className="flex items-center p-4 hover:bg-gray-700 mt-auto"
                >
                    <ArrowLeftFromLine className="mr-2 w-5 h-5" />
                    Sair
                </NavLink>
            </nav>
            <div className="p-4 mt-auto text-center text-sm text-gray-500">
                © 2025 Moovox
            </div>
        </aside>
    );
}

export default Sidebar;