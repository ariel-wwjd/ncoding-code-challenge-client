import PropTypes from 'prop-types';
import { IModalForm } from './types';
import { LoginOrSigUp } from './LoginOrSignUp';
import { Application } from './Application';
import './styles.scss';

const ModalContent: React.FC<IModalForm> = ({
  onSignUp,
  onLogin,
  children,
  onClose,
  type = 'loginOrSignUp',
  course,
}) => {
  const chooseContent = (type: string) => {
    switch (type) {
      case 'loginOrSignUp':
        return (
          <LoginOrSigUp
            type='signUp'
            onClose={onClose}
            onLogin={(user) => {
              onLogin(user);
            }}
            onSignUp={(user) => {
              onSignUp(user);
            }}
          />
        );

      case 'application':
        return <Application course={course} onClose={onClose} />;

      default:
        return children ? children : <></>;
    }
  };

  return (
    <div className='modal-form-component'>
      <button className='action' onClick={onClose}>
        X
      </button>
      {chooseContent(type)}
    </div>
  );
};

ModalContent.propTypes = {
  type: PropTypes.oneOf(['loginOrSignUp', 'application']),
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  course: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export { ModalContent };
