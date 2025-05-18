import { Mail, Lock } from "lucide-react";

function LoginCard() {
    return (
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 w-96 text-center backdrop-blur-md">
            <img
                src="imgs/logo-moovox-redimensionado.png"
                alt="Moovox Logo"
                className="mx-auto mb-4 w-20"
            />

            <h2 className="font-poppins text-2xl font-semibold text-green-700 mb-1">
                Bem-vindo ao <span className="text-brown-700 font-bold">Moovox</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6 font-poppins">
                Gestão inteligente de animais no campo
            </p>

            <form className="space-y-4 text-left">
                <div>
                    <label className="block text-sm text-gray-700 mb-1">E-mail</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3">
                        <Mail className="w-4 h-4 text-gray-700 mr-2" />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="w-full py-2 text-sm outline-none bg-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-700 mb-1">Senha</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3">
                        <Lock className="w-4 h-4 text-gray-700 mr-2" />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="w-full py-2 text-sm outline-none bg-transparent focus:outline-blue-600"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
                >
                    Entrar
                </button>
            </form>

            <a
                href="/"
                className="block text-sm text-green-600 mt-4 hover:underline font-poppins"
            >
                Esqueci minha senha
            </a>
        </div>
    );
}

export default LoginCard;
