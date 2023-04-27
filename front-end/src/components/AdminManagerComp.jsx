import { useState, useEffect } from 'react';
import { addUser, getUserList, deleteUser } from '../Services/RequestAPI';
import ErrorMessage from './ErrorMessage';
import UserCard from './UserCard';
import styleAdminManager from '../pages/AdminManager/AdminManager.module.css';

export default function AdminManagerComp() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('administrator');
  const [password, setPassword] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const MIN_CHAR = 6;
  const NAME_CHAR = 12;
  const { token } = JSON.parse(localStorage.getItem('user'));

  const checkName = (n) => n.length >= NAME_CHAR;
  const checkPassword = (pass) => pass.length >= MIN_CHAR;
  const checkEmail = (mail) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail);

  console.log(users);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUserList(token);
      setUsers(data);
    }
    try {
      fetchData();
      setErrorMsg(null);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      const { response } = e;
      setErrorMsg(response?.data.message);
    }
  }, []);

  const checkButton = () => {
    if (checkName(name) && checkPassword(password) && checkEmail(email)) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  useEffect(() => {
    checkButton();
  }, [name, password, email]);

  const loadUsers = async () => {
    try {
      const { data } = await getUserList(token);
      setUsers(data);
      setErrorMsg(null);
    } catch (error) {
      const { response } = error;
      setErrorMsg(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddUser = async () => {
    const body = {
      name, email, password, role,
    };
    try {
      await addUser(body, token);
      setErrorMsg(null);
      await loadUsers();
    } catch (error) {
      const { response } = error;
      setErrorMsg(response.data.message);
    } finally {
      setEmail('');
      setName('');
      setPassword('');
    }
  };

  const handleDeleteUser = async ({ target: { id } }) => {
    console.log(id);
    try {
      await deleteUser(id, token);
      setErrorMsg(null);
      await loadUsers();
    } catch (error) {
      const { response } = error;
      setErrorMsg(response?.data.message);
    }
  };

  return (
    <div className={ styleAdminManager.containerGeral }>
      <h2>Cadastrar novo usuário</h2>
      {errorMsg && <ErrorMessage
        ErrorMsg={ errorMsg }
        dataTestId="admin_manage__element-invalid-register"
      /> }
      <form className={ styleAdminManager.formRegister }>
        <label htmlFor="nome-input">
          {' Nome '}
          <input
            id="nome-input"
            type="text"
            data-testid="admin_manage__input-name"
            className="input-login inputNome"
            placeholder="Nome e sobrenome"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          {' Email '}
          <input
            id="email-input"
            type="email"
            data-testid="admin_manage__input-email"
            className="input-login inputEmail"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          {' Senha '}
          <input
            id="password-input"
            type="password"
            value={ password }
            data-testid="admin_manage__input-password"
            className="input-login inputPassWord"
            placeholder="Password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          {' Tipo '}
          <select
            data-testid="admin_manage__select-role"
            value={ role }
            defaultValue="administrator"
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="administrator">administrator</option>
            <option value="seller">seller</option>
            <option value="customer">customer</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ buttonDisable }
          onClick={ handleAddUser }
        >
          Cadastrar
        </button>
      </form>
      <table className={ styleAdminManager.tableUsers }>
        <thead className={ styleAdminManager.theadTable }>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </thead>
        { !isLoading && (
          <tbody>
            { users.length && users.map((item, id) => (
              <UserCard
                key={ item.id }
                item={ item }
                id={ id }
                onClick={ handleDeleteUser }
              />
            ))}
          </tbody>
        ) }
      </table>
    </div>
  );
}
