import PropTypes from 'prop-types';
import './styles.scss';
import { IModal } from './types';

const Modal: React.FC<IModal> = ({ children }) => {
  return <div className='modal-component'> {children} </div>;
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export { Modal };
