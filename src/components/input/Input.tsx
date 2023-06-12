import PropTypes from 'prop-types';
import { IInput } from './types';
import './styles.scss';

const Input:React.FC<IInput> = ({ id, label, placeHolder, value, onChange, type='text' }) => {
  const changeHandler = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className='input-component' key={id}>
      <div className="left-container">
        <div className='label'>{label}</div>
        <input 
          className='input'
          placeholder={placeHolder}
          value={value}
          onChange={(e) => {changeHandler(e.target.value)}}
          type={type}
        />
      </div>
      <div className="right-container" onClick={() => changeHandler('')}>
        <span>X</span>
      </div>
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'date', 'number']),
}

export { Input };
