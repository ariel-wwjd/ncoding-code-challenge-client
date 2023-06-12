import PropTypes from 'prop-types';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { Input } from '../input';
import { ISignUp } from './types';
import './styles.scss';

const SignUp: React.FC<ISignUp> = ({ name, email, password, confirmPassword, country, onChange }) => {
  const changeHandler = (id: string, value: string) => {
    onChange(id, value);
  };

  return (
    <div className="sign-up-form">
      <div className='input-element'>
        <Input
          id='name'
          label='Full name'
          onChange={(value) => {changeHandler('name', value)}}
          placeHolder='Enter your full name'
          value={name}
        />
      </div>
      <div className='input-element'>   
        <Input
          id='email'
          label='Username (Email Address)'
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
      <div className='input-element'>
        <Input
          id='id2'
          label='Confirm your password'
          onChange={(value) => {changeHandler('confirmPassword', value)}}
          placeHolder='Confirm your password'
          value={confirmPassword}
        />
      </div>
      <div className='input-element'>
        <Input
          id='id2'
          label='Country'
          onChange={(value) => {changeHandler('country', value)}}
          placeHolder='Select your country'
          value={country}
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

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export { SignUp };
