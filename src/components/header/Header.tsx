/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { className } from '../../utils';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { IHeader } from './types';
import './styles.scss';

const Header: React.FC<IHeader> = ({ navItems, onRegisterOrLogin }) => {
  const items = navItems.map((item) => (
    <li className={`item ${className('active')(item.isActive)}`} key={item.id} onClick={item.onClick}>{item.label} ▾</li>
  ));

  return (
    <div className="header-component">
      <div className='logo'>Logo</div>
      <ul className='items'>
        {items}
      </ul>
      <div className='buttons'>
        <Button label='Register or Login' type={ButtonType.quadrate} onClick={onRegisterOrLogin} />
      </div>
    </div>
  )
}

// TODO: find the right way to use prop types from  IHeaderItem
Header.propTypes = {
//   navItems: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     isActive: PropTypes.bool.isRequired,
//   })).isRequired
  onRegisterOrLogin: PropTypes.func.isRequired
}

export { Header };
