// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Droplets,
    Package,
    User,
    ArrowLeftFromLine,
    Icon,
    Menu // Importe o ícone de menu
} from 'lucide-react';
import { cowHead } from '@lucide/lab';

function Sidebar({ onToggle, isExpanded }) {
    return (
        <>
            {/* Ícone de menu */}
            <button
                onClick={onToggle}
                className="bg-gray-800 text-white p-2 rounded-md shadow-md fixed top-4 left-4 z-50"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Sidebar */}
            <aside
                className={`bg-gray-800 text-white min-h-screen flex flex-col shadow-md fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out ${isExpanded ? 'translate-x-0 w-64' : '-translate-x-full w-16'
                    }`}
                style={{ willChange: 'transform, width' }}
            >
                <div className="p-4 flex items-center justify-center">
                    <Link to="/dashboard" className="flex items-center text-xl font-bold">
                        <Icon iconNode={cowHead} className={`h-8 w-8 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-100'}`} />
                        <span className={`ml-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Moovox</span>
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
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Dashboard</span>
                    </NavLink>
                    <NavLink
                        to="/usuarios"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Users className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Usuários</span>
                    </NavLink>
                    <NavLink
                        to="/animais"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Animais</span>
                    </NavLink>
                    <NavLink
                        to="/vacinas"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Droplets className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Vacinas</span>
                    </NavLink>
                    <NavLink
                        to="/aplicacoes"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Package className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Aplicações</span>
                    </NavLink>
                    <NavLink
                        to="/meu-perfil"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <User className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Meu Perfil</span>
                    </NavLink>
                    <NavLink
                        to="/sair"
                        className="flex items-center p-4 hover:bg-gray-700 mt-auto"
                    >
                        <ArrowLeftFromLine className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>Sair</span>
                    </NavLink>
                </nav>
                <div className="p-4 mt-auto text-center text-sm text-gray-500 transition-opacity duration-300">
                    <span className={`${isExpanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;