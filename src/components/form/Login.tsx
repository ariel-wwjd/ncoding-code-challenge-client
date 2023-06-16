import PropTypes from 'prop-types';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { Input } from '../input';
import { ILogin } from './types';

const Login: React.FC<ILogin> = ({ email, password, onChange, onSubmit }) => {
  const changeHandler = (id: string, value: string) => {
    onChange(id, value);
  };

  return (
    <div className='login-form'>
      <div className='input-element'>
        <Input
          id='email'
          label='Username*'
          onChange={(value) => {
            changeHandler('email', value);
          }}
          placeHolder='Enter your email'
          value={email}
          type='email'
          isRequired
        />
      </div>
      <div className='input-element'>
        <Input
          id='password'
          label='Your password*'
          onChange={(value) => {
            changeHandler('password', value);
          }}
          placeHolder='Enter your password'
          value={password}
          type='password'
          isRequired
        />
      </div>
      <Button label='Continue' onClick={onSubmit} type={ButtonType.spherical} />
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export { Login };
