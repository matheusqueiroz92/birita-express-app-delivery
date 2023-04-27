import React from 'react';
import PropTypes from 'prop-types';
import styleAdminManager from '../pages/AdminManager/AdminManager.module.css';

export default function UserCard(props) {
  const { item, id, onClick } = props;

  return (
    <tr>
      <td
        className={ styleAdminManager.columnOne }
        data-testid={ `admin_manage__element-user-table-item-number-${id}` }
      >
        {id + 1}
      </td>
      <td
        className={ styleAdminManager.columnTwo }
        data-testid={ `admin_manage__element-user-table-name-${id}` }
      >
        {item.name}
      </td>
      <td
        className={ styleAdminManager.columnThree }
        data-testid={ `admin_manage__element-user-table-email-${id}` }
      >
        {item.email}
      </td>
      <td
        className={ styleAdminManager.columnFour }
        data-testid={ `admin_manage__element-user-table-role-${id}` }
      >
        {item.role}
      </td>
      <td
        className={ styleAdminManager.columnFive }
      >
        <button
          className={ styleAdminManager.buttonRemove }
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${id}` }
          id={ item.id }
          onClick={ onClick }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
}.isRequired;
