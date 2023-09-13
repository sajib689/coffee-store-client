import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoginNested from './LoginNested';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
                <LoginNested></LoginNested>
            <Footer></Footer>
        </div>
    );
};

export default Login;