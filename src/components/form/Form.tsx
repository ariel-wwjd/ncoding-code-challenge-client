import PropTypes from 'prop-types';
import { IForm } from './types';
import './styles.scss';

const Form:React.FC<IForm> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onSubmit: PropTypes.func.isRequired,
}

export { Form };
