import Sidebar from '../../components/Sidebar';

function Dashboard() {
    return (
        <div className="d-flex"> {/* Usando uma classe flex do Bootstrap temporariamente para o layout */}
            <Sidebar />
            <main className="flex-grow-1 p-4 bg-leather-main">
                <h2 className="mb-4 text-white fw-bold">Painel do Administrador</h2>
                {/* Aqui virá o conteúdo principal do seu Dashboard */}
                <div>
                    {/* Cards de resumo, gráficos, tabelas, etc. */}
                    <p className="text-white">Conteúdo principal do Dashboard aqui...</p>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;