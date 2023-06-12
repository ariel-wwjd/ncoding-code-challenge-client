import PropTypes from 'prop-types';
import { IModalForm } from './types';
import { LoginOrSigUp } from './LoginOrSignUp';
import { Application } from './Application';
import './styles.scss';

const ModalContent: React.FC<IModalForm> = ({ children, onClose, type='loginOrSignUp' }) => {
  const chooseContent = (type: string) => {
    switch (type) {
      case 'loginOrSignUp':
        return <LoginOrSigUp type='signUp'/>

      case 'application':
        return <Application />
    
      default:
        return children ? children : <></>
    }
  }

  return (
    <div className="modal-form-component" >
      <button className='action' onClick={onClose}>X</button>
      {chooseContent(type)}
    </div>
  )
};

ModalContent.propTypes = {
  type: PropTypes.oneOf(['loginOrSignUp', 'application']),
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export { ModalContent };
