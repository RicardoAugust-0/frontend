import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/MainLayout';
import Card from '../../components/ui/Card';
import { Icon, Users, Syringe, AlertTriangle, MapPin } from 'lucide-react';
import { cowHead } from '@lucide/lab';
import HeartBeatIcon from '../../components/ui/HeartBeatIcon';
import MetricCard from '../../components/dashboard/MetricCard';
import ListCard from '../../components/dashboard/ListCard';
import MessageCard from '../../components/dashboard/MessageCard';
import ImageCard from '../../components/dashboard/ImageCard';
import TelemetryCard from '../../components/dashboard/TelemetryCard';

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Moovox | Dashboard</title>
                <meta name='description' content='Moovox Dashboard' />
            </Helmet>
            <MainLayout title="Painel do Administrador">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                    <Card variant="terra">
                        <MetricCard icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />} title="Usuários" value={10} />
                    </Card>
                    <Card variant="verde">
                        <MetricCard icon={<Icon iconNode={cowHead} className="w-5 h-5 sm:w-6 sm:h-6" />} title="Animais Registrados" value={10} />
                    </Card>
                    <Card variant="palha">
                        <MetricCard icon={<Syringe className="w-5 h-5 sm:w-6 sm:h-6" />} title="Doses Pendentes" value={0} />
                    </Card>
                    <Card variant="alerta">
                        <MetricCard icon={<AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />} title="Alertas de Saúde" value={5} />
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <Card variant="rural">
                        <ListCard title="Últimos Usuários Cadastrados" items={[
                            'Administrador Moovox - admin',
                            'Dr. Benjamin Nogueira - veterinario',
                            'Mariana Saraiva - veterinario',
                        ]} />
                    </Card>
                    <Card variant="rural">
                        <MessageCard title="Doses Pendentes" message="Nenhuma dose pendente." />
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Card variant="rural">
                        <ImageCard
                            title="Localização dos Animais"
                            icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />}
                            imageUrl="https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-47.0608,-22.9099&z=13&l=map&size=450,200"
                            alt="Mapa"
                        />
                    </Card>
                    <Card variant="rural">
                        <TelemetryCard
                            title="Telemetria do Animal"
                            icon={<HeartBeatIcon />}
                            animal="Branquinha"
                            temperature="38.5ºC"
                            heartRate="78 bpm"
                            lastUpdate="13/04/2025 às 15:42"
                        />
                    </Card>
                </div>
            </MainLayout>
        </>
    );
}

export default Dashboard;
