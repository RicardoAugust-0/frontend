import { Helmet } from 'react-helmet-async';
import LoginCard from '../../components/LoginCard';

function Login() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <Helmet>
                <title>Moovox | Login</title>
                <meta name='description' content='Moovox Login Page' />
            </Helmet>
            <LoginCard />
        </div>
    )
}

export default Login;