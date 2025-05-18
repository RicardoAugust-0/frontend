import { Helmet } from 'react-helmet-async';
import LoginCard from '../../components/LoginCard';

function Login() {
    return (
        <div>
            <Helmet>
                <title>Moovox | Login</title>
                <meta name='description' content='Moovox Login Page' />
            </Helmet>
            <LoginCard />
        </div>
    )
}

export default Login;