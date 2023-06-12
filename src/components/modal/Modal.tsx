import PropTypes from 'prop-types';
import { IModal } from './types';
import './styles.scss';

const Modal: React.FC<IModal> = ({ isVisible, children }) => {
  return (
    <>
      {
        isVisible && <div className='modal-component'>{children}</div>
      }

    </>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isVisible: PropTypes.bool,
};

export { Modal };
