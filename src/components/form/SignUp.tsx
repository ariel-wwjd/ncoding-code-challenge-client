import PropTypes from 'prop-types';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { Input } from '../input';
import { ISignUp } from './types';
import './styles.scss';

const SignUp: React.FC<ISignUp> = ({
  name,
  email,
  password,
  confirmPassword,
  country,
  onChange,
  onSubmit,
}) => {
  const changeHandler = (id: string, value: string) => {
    onChange(id, value);
  };

  return (
    <div className='sign-up-form'>
      <div className='input-element'>
        <Input
          id='name'
          label='Full name'
          onChange={(value) => {
            changeHandler('name', value);
          }}
          placeHolder='Enter your full name'
          value={name}
        />
      </div>
      <div className='input-element'>
        <Input
          id='email'
          label='Username (Email Address)'
          onChange={(value) => {
            changeHandler('email', value);
          }}
          placeHolder='Enter your email'
          value={email}
        />
      </div>
      <div className='input-element'>
        <Input
          id='password'
          label='Your password'
          onChange={(value) => {
            changeHandler('password', value);
          }}
          placeHolder='Enter your password'
          value={password}
          type='password'
        />
      </div>
      <div className='input-element'>
        <Input
          id='confirmPassword'
          label='Confirm your password'
          onChange={(value) => {
            changeHandler('confirmPassword', value);
          }}
          placeHolder='Confirm your password'
          value={confirmPassword}
          type='password'
        />
      </div>
      <div className='input-element'>
        <Input
          id='country'
          label='Country'
          onChange={(value) => {
            changeHandler('country', value);
          }}
          placeHolder='Select your country'
          value={country}
        />
      </div>
      <Button label='Continue' onClick={onSubmit} type={ButtonType.spherical} />
    </div>
  );
};

SignUp.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  country: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export { SignUp };
