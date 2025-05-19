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
import PropTypes from 'prop-types';

/**
 * Sidebar de navegação principal
 * @param {{ onToggle?: () => void, isExpanded?: boolean, showContent?: boolean }} props
 */
function Sidebar({ onToggle, isExpanded, showContent }) {
    // Detecta se está em desktop (lg+) para forçar expandido
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const expanded = isDesktop ? true : isExpanded;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    // Itens do menu extraídos para facilitar manutenção
    const menuItems = [
        {
            to: '/dashboard',
            icon: <LayoutDashboard className="mr-2 w-5 h-5" />,
            label: 'Dashboard',
        },
        {
            to: '/usuarios',
            icon: <Users className="mr-2 w-5 h-5" />,
            label: 'Usuários',
        },
        {
            to: '/animais',
            icon: <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />,
            label: 'Animais',
        },
        {
            to: '/vacinas',
            icon: <Droplets className="mr-2 w-5 h-5" />,
            label: 'Vacinas',
        },
        {
            to: '/aplicacoes',
            icon: <Package className="mr-2 w-5 h-5" />,
            label: 'Aplicações',
        },
        {
            to: '/meu-perfil',
            icon: <User className="mr-2 w-5 h-5" />,
            label: 'Meu Perfil',
        },
    ];
    // Animação de entrada para desktop
    return (
        <>
            {/* Overlay escuro ao abrir a sidebar no mobile */}
            {!isDesktop && expanded && (
                <div className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300" onClick={onToggle} />
            )}
            {/* Ícone de menu só em telas pequenas */}
            <button
                onClick={onToggle}
                className="bg-gradient-to-br from-[#bfa77a] via-[#f9e7c2] to-[#a97c50] text-[#7c5a3a] p-2 rounded-xl shadow-lg fixed top-4 left-4 z-50 block lg:hidden active:scale-90 transition-transform duration-150 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#bfa77a]"
                style={{ boxShadow: '0 2px 8px 0 #bfa77a55' }}
            >
                <Menu className="w-7 h-7" />
            </button>

            {/* Sidebar sempre visível em desktop, toggle em mobile */}
            <aside
                className={`relative bg-[#f9e7c2]/90 text-[#7c5a3a] min-h-screen flex flex-col shadow-lg border-r-2 border-[#e5d3b3] fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out
                    ${expanded ? 'translate-x-0 w-64' : '-translate-x-0 w-0'}
                    lg:translate-x-0 lg:w-64
                    transition-all duration-700
                    ${isDesktop ? (showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8') : ''}
                    ${!expanded && !isDesktop ? 'pointer-events-none select-none' : ''}`}
                style={{
                    willChange: 'transform, width',
                    backgroundImage: "url('/imgs/wood-texture.webp')",
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    boxShadow: '2px 0 12px 0 #e5d3b3'
                }}
            >
                {/* Overlay bege translúcido para suavizar a textura */}
                <div className="absolute inset-0 bg-[#f9e7c2]/90 pointer-events-none z-0" />
                {/* Adiciona um espaçamento superior e à esquerda no conteúdo principal para evitar sobreposição do botão de menu no mobile */}
                <div className={`relative z-10 p-4 flex items-center justify-center ${!expanded && !isDesktop ? 'hidden' : ''} ${!isDesktop ? 'mt-4 ml-12' : ''}`}>
                    <Link to="/dashboard" className="flex items-center text-xl font-bold">
                        <Icon iconNode={cowHead} className="h-8 w-8 transition-opacity duration-300 opacity-100 text-[#bfa77a] drop-shadow" />
                        <span className={`ml-2 transition-opacity duration-300 font-poppins tracking-wide ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>Moovox</span>
                    </Link>
                </div>
                <nav className={`relative z-10 mt-6 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
                    {menuItems.map(({ to, icon, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `flex items-center p-4 rounded-lg mx-2 my-1 font-semibold hover:bg-[#e5d3b3]/80 hover:text-[#7c5a3a] transition-colors duration-200 ${isActive ? 'bg-[#bfa77a] text-white shadow-md border-l-4 border-[#7c5a3a]' : ''}`
                            }
                        >
                            {icon}
                            <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}>{label}</span>
                        </NavLink>
                    ))}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <button className="flex items-center p-4 rounded-lg mx-2 my-1 font-semibold hover:bg-[#e5d3b3]/80 hover:text-[#7c5a3a] mt-auto w-full transition-colors duration-200">
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
                <div className={`relative z-10 p-4 mt-auto text-center text-xs text-[#bfa77a] transition-opacity duration-300 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
                    <span className={`${expanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
                </div>
            </aside>
        </>
    );
}

Sidebar.propTypes = {
  onToggle: PropTypes.func,
  isExpanded: PropTypes.bool,
  showContent: PropTypes.bool,
};

Sidebar.defaultProps = {
  onToggle: () => {},
  isExpanded: false,
  showContent: false,
};

export default Sidebar;