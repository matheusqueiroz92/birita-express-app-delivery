import Footer from '../../components/Footer';
import RegisterForm from '../../components/RegisterForm';
import styleRegister from './Register.module.css';

export default function Register() {
  return (
    <div className={ styleRegister.bodyPage }>
      <RegisterForm />
      <Footer />
    </div>
  );
}
