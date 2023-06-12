import PropTypes from 'prop-types';
import { useState } from 'react';
import { Selector } from '../selector';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { IconsType } from '../icons/types';
import { Form, Login, SignUp } from '../form';
import { ILoginOrSignUp } from './types';
import './styles.scss';

const LoginOrSigUp: React.FC<ILoginOrSignUp> = ({ type = 'signUp' }) => {
  const [modalSignUpOrLoginId, setModalSignUpOrLoginId] = useState<string>(type);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [currentType, setCurrentType] = useState<string>(type);

  const title =
    currentType === 'signUp' ? 'Register as a new student' : 'Are you an existing student?';
  console.log({ currentType });

  const changeLoginSignUpHandler = (id: string) => {
    setModalSignUpOrLoginId(id);
    setIsLogin(!isLogin);
    setCurrentType(currentType === 'login' ? 'signUp' : 'login');
  };

  return (
    <div className='modal-login-signUp'>
      <div className='head'>
        <div className='name'>Log in or sign up</div>
      </div>
      <div className='container'>
        <div className='form-title'>{title}</div>
        <Selector
          options={[
            { id: 'login', label: 'Login' },
            { id: 'signUp', label: 'Sign Up' },
          ]}
          onClick={changeLoginSignUpHandler}
          currentOptionId={modalSignUpOrLoginId}
        />
        <div className='form-container'>
          <Form
            onSubmit={() => {
              console.log({});
            }}
          >
            {currentType === 'signUp' ? (
              <SignUp
                name=''
                email=''
                password=''
                confirmPassword=''
                country=''
                onChange={(a, b) => console.log({ a, b })}
              />
            ) : (
              <Login email='' password='' onChange={(a, b) => console.log({ a, b })} />
            )}
          </Form>

          <div className='center'>
            <div className='bar'></div>
            <div className='or'>Or</div>
            <div className='bar'></div>
          </div>
          <div className='actions'>
            <div className='action-button'>
              <Button
                label='Continue with Linkein'
                onClick={() => {
                  () => {
                    console.log('Linkedin');
                  };
                }}
                type={ButtonType.rounded}
                icon={IconsType.linkedin}
              />
            </div>
            <div className='action-button'>
              <Button
                label='Continue with Facebook'
                onClick={() => {
                  () => {
                    console.log('Linkedin');
                  };
                }}
                type={ButtonType.rounded}
                icon={IconsType.facebook}
              />
            </div>
            <div className='action-button'>
              <Button
                label='Continue with Istagram'
                onClick={() => {
                  () => {
                    console.log('Linkedin');
                  };
                }}
                type={ButtonType.rounded}
                icon={IconsType.instagram}
              />
            </div>
            <div className='action-button'>
              <Button
                label='Continue with Google'
                onClick={() => {
                  () => {
                    console.log('Linkedin');
                  };
                }}
                type={ButtonType.rounded}
                icon={IconsType.google}
              />
            </div>
            <div className='captcha'>
              Protected by reCAPTCHA and Googles <u>Privacy</u> and <u>Terms</u>.
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

LoginOrSigUp.propTypes = {
  type: PropTypes.oneOf(['login', 'signUp']),
};

export { LoginOrSigUp };
