// public/pages/Dashboard.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/MainLayout';
import Card from '../../components/ui/Card';
import { Icon, Users, Syringe, AlertTriangle, MapPin } from 'lucide-react';
import { cowHead } from '@lucide/lab';
import HeartBeatIcon from '../../components/ui/HeartBeatIcon';

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Moovox | Dashboard</title>
                <meta name='description' content='Moovox Dashboard' />
            </Helmet>
            <MainLayout title="Painel do Administrador">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                    <Card variant="terra" className="flex flex-row items-center justify-between py-4 px-4 gap-2">
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-bold flex items-center gap-2 text-base sm:text-lg">
                                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                                Usuários
                            </span>
                            <span className="text-2xl sm:text-4xl font-bold mt-1">10</span>
                        </div>
                    </Card>

                    <Card variant="verde" className="flex flex-row items-center justify-between py-4 px-4 gap-2">
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-bold flex items-center gap-2 text-base sm:text-lg">
                                <Icon iconNode={cowHead} className="w-5 h-5 sm:w-6 sm:h-6" />
                                Animais Registrados
                            </span>
                            <span className="text-2xl sm:text-4xl font-bold mt-1">10</span>
                        </div>
                    </Card>

                    <Card variant="palha" className="flex flex-row items-center justify-between py-4 px-4 gap-2">
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-bold flex items-center gap-2 text-base sm:text-lg">
                                <Syringe className="w-5 h-5 sm:w-6 sm:h-6" />
                                Doses Pendentes
                            </span>
                            <span className="text-2xl sm:text-4xl font-bold mt-1">0</span>
                        </div>
                    </Card>

                    <Card variant="alerta" className="flex flex-row items-center justify-between py-4 px-4 gap-2">
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-bold flex items-center gap-2 text-base sm:text-lg">
                                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
                                Alertas de Saúde
                            </span>
                            <span className="text-2xl sm:text-4xl font-bold mt-1">5</span>
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <Card variant="rural" className="p-2 sm:p-4 flex flex-col gap-2">
                        <span className="font-bold text-base sm:text-lg mb-1">Últimos Usuários Cadastrados</span>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#a97c50] rounded-lg p-1 sm:p-2 text-white text-center text-xs sm:text-base">Administrador Moovox - admin</div>
                            <div className="bg-[#a97c50] rounded-lg p-1 sm:p-2 text-white text-center text-xs sm:text-base">Dr. Benjamin Nogueira - veterinario</div>
                            <div className="bg-[#a97c50] rounded-lg p-1 sm:p-2 text-white text-center text-xs sm:text-base">Mariana Saraiva - veterinario</div>
                        </div>
                    </Card>

                    <Card variant="rural" className="p-2 sm:p-4 flex flex-col items-center justify-center gap-2">
                        <span className="font-bold text-base sm:text-lg mb-1">Doses Pendentes</span>
                        <div className="text-[#7c5a3a] text-center text-xs sm:text-base">Nenhuma dose pendente.</div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Card variant="rural" className="p-2 sm:p-4 flex flex-col gap-2">
                        <span className="font-bold flex items-center gap-2 text-base sm:text-lg mb-1">
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                            Localização dos Animais
                        </span>
                        <div className="rounded-lg overflow-hidden">
                            <img src="https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-47.0608,-22.9099&z=13&l=map&size=450,200" alt="Mapa" className="w-full h-40 sm:h-48 object-cover" />
                        </div>
                    </Card>

                    <Card variant="rural" className="p-2 sm:p-4 flex flex-col gap-2">
                        <span className="font-bold flex items-center gap-2 text-base sm:text-lg mb-1">
                            <HeartBeatIcon />
                            Telemetria do Animal
                        </span>
                        <div className="bg-white text-[#3e2c1a] rounded-lg p-2 sm:p-4 text-center text-xs sm:text-base">
                            <div><b>Animal:</b> Branquinha</div>
                            <div><b>Temperatura Corporal:</b> 38.5ºC</div>
                            <div><b>Frequência Cardíaca:</b> 78 bpm</div>
                            <div><b>Último Registro:</b> 13/04/2025 às 15:42</div>
                        </div>
                    </Card>
                </div>
            </MainLayout>
        </>
    );
}

export default Dashboard;
