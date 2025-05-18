import { Mail, Lock } from "lucide-react";

function LoginCard() {
    return (
        // Card inteiro
        <div className="bg-white shadow-[inset_0px_0px_4px_1px_#b3ffcf] bg-opacity-90 rounded-xl  p-8 w-96 text-center backdrop-blur-md">
            <img
                src="imgs/logo-moovox-redimensionado.png"
                alt="Moovox Logo"
                className="mx-auto mb-4 w-28"
                draggable="false"
            />

            <h2 className="font-poppins text-2xl text-green-700 mb-1">
                Bem-vindo ao <span className="text-3xl text-amber-950 font-bold">Moovox</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-poppins">
                Gestão inteligente de animais no campo
            </p>

            <form className="space-y-4 text-left">
                <div> {/* Input Email */}
                    <label className="block font-poppins text-sm text-gray-700 mb-1">E-mail</label>
                    <div className="flex bg-green-100 items-center border border-gray-300 rounded-xl pl-3">
                        <Mail className="w-4 h-4 text-gray-700 mr-2" />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full font-poppins py-2 text-sm outline-none bg-transparent transition-all duration-150 ease-in-out focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:border-blue-400 rounded-e-xl"
                        />
                    </div>
                </div>

                <div> {/* Input Senha */}
                    <label className="block font-poppins text-sm text-gray-700 mb-1">Senha</label>
                    <div className="flex bg-green-100 items-center border border-gray-300 rounded-xl pl-3">
                        <Lock className="w-4 h-4 text-gray-700 mr-2" />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="w-full font-poppins py-2 text-sm outline-none bg-transparent transition-all duration-150 ease-in-out focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:border-blue-400 rounded-e-xl"
                        />
                    </div>
                </div>

                {/* Botão Entrar + Esqueci minha senha */}
                <button
                    type="submit"
                    className="w-full font-poppins font-bold bg-green-600 text-white p-[5px] rounded-xl hover:bg-green-700 transition"
                >
                    Entrar
                </button>
            </form>

            <a
                href="/"
                className="block text-sm text-green-600 mt-4 hover:underline font-poppins">
                Esqueci minha senha
            </a>
        </div>
    );
}

export default LoginCard;
