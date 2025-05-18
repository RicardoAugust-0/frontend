import { Helmet } from "react-helmet-async";
import ForgotPassCard from "../../components/ForgotPassCard";


function ForgotPass() {
    return (
        <div>
            <Helmet>
                <title>Moovox | Esqueci minha senha</title>
                <meta name="description" content="Esqueci minha senha" />
            </Helmet>
            <ForgotPassCard />
        </div>
    )
}

export default ForgotPass;