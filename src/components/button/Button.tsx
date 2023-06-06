import PropTypes from 'prop-types';
import { classNames } from '../../utils';
import { IconsType } from '../icons/types';
import { Icons } from '../icons';
import { ButtonSize, ButtonType, IButton } from './types';
import './styles.scss';

const Button: React.FC<IButton> = ({ label, type, onClick, icon, size }) => {
  const classes = classNames([
    { class: 'button-component', hasClass: true },
    { class: 'quadrate', hasClass: type === ButtonType.quadrate ? true : false },
    { class: 'rounded', hasClass: type === ButtonType.rounded ? true : false },
    { class: 'spherical', hasClass: type === ButtonType.spherical ? true : false },
    { class: 'small', hasClass: size === ButtonSize.small ? true : false },
  ]);

  return (
    <button className={classes} onClick={onClick}>
      {icon && <Icons icon={icon}></Icons>}
      <span className='label'>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf([ButtonType.quadrate, ButtonType.rounded, ButtonType.spherical]).isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOf([
    IconsType.facebook,
    IconsType.instagram,
    IconsType.linkedin,
    IconsType.google,
  ]),
  size: PropTypes.oneOf([ButtonSize.normal, ButtonSize.small]),
};

export { Button };
