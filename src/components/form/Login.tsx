import PropTypes from 'prop-types';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { Input } from '../input';
import { ILogin } from './types';

const Login: React.FC<ILogin> = ({ email, password, onChange }) => {
  const changeHandler = (id: string, value: string) => {
    onChange(id, value);
  };

  return (
    <div className="login-form">
      <div className='input-element'>
        <Input
          id='email'
          label='Username'
          onChange={(value) => {changeHandler('email', value)}}
          placeHolder='Enter your email'
          value={email}
        />
      </div>
      <div className='input-element'>
        <Input
          id='id2'
          label='Your password'
          onChange={(value) => {changeHandler('password', value)}}
          placeHolder='Enter your password'
          value={password}
        />
      </div>
      <Button 
        label='Continue'
        onClick={() => {console.log('Continue');}}
        type={ButtonType.spherical}
      />
    </div>
  )
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export { Login };
