// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Droplets,
    Package,
    User,
    ArrowLeftFromLine,
    Icon,
    Menu
} from 'lucide-react';
import { cowHead } from '@lucide/lab';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

function Sidebar({ onToggle, isExpanded, showContent }) {
    // Detecta se está em desktop (lg+) para forçar expandido
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const expanded = isDesktop ? true : isExpanded;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    // Animação de entrada para desktop
    return (
        <>
            {/* Ícone de menu só em telas pequenas */}
            <button
                onClick={onToggle}
                className="bg-gray-800 text-white p-2 rounded-md shadow-md fixed top-4 left-4 z-50 block lg:hidden"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Sidebar sempre visível em desktop, toggle em mobile */}
            <aside
                className={`bg-gray-800 text-white min-h-screen flex flex-col shadow-md fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out
                    ${expanded ? 'translate-x-0 w-64' : '-translate-x-full w-16'}
                    lg:translate-x-0 lg:w-64
                    transition-all duration-700
                    ${isDesktop ? (showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8') : ''}`}
                style={{ willChange: 'transform, width' }}
            >
                <div className="p-4 flex items-center justify-center">
                    <Link to="/dashboard" className="flex items-center text-xl font-bold">
                        <Icon iconNode={cowHead} className="h-8 w-8 transition-opacity duration-300 opacity-100" />
                        <span className={`ml-2 transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Moovox</span>
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
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Dashboard</span>
                    </NavLink>
                    <NavLink
                        to="/usuarios"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Users className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Usuários</span>
                    </NavLink>
                    <NavLink
                        to="/animais"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Animais</span>
                    </NavLink>
                    <NavLink
                        to="/vacinas"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Droplets className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Vacinas</span>
                    </NavLink>
                    <NavLink
                        to="/aplicacoes"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <Package className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Aplicações</span>
                    </NavLink>
                    <NavLink
                        to="/meu-perfil"
                        className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-green-700' : ''}`
                        }
                    >
                        <User className="mr-2 w-5 h-5" />
                        <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Meu Perfil</span>
                    </NavLink>
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <button className="flex items-center p-4 hover:bg-gray-700 mt-auto w-full">
                                <ArrowLeftFromLine className="mr-2 w-5 h-5" />
                                <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Sair</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Deseja realmente sair?</DialogTitle>
                            <DialogDescription>Você será deslogado e voltará para a tela de login.</DialogDescription>
                            <div className="flex justify-end gap-2 mt-4">
                                <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setOpen(false)}>Cancelar</button>
                                <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700" onClick={() => { setOpen(false); navigate('/'); }}>Sair</button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </nav>
                <div className="p-4 mt-auto text-center text-sm text-gray-500 transition-opacity duration-300">
                    <span className={`${expanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;