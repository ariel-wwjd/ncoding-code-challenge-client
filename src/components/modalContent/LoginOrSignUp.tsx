import PropTypes from 'prop-types';
import { useState } from 'react';
import { Selector } from '../selector';
import { Button } from '../button';
import { ButtonType } from '../button/types';
import { IconsType } from '../icons/types';
import { Form, Login, SignUp } from '../form';
import { ILoginOrSignUp, IUser } from './types';
import './styles.scss';

const LoginOrSigUp: React.FC<ILoginOrSignUp> = ({ type = 'signUp', onLogin, onSignUp }) => {
  const [modalSignUpOrLoginId, setModalSignUpOrLoginId] = useState<string>(type);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [currentType, setCurrentType] = useState<string>(type);
  const [userSignUp, setUserSignUp] = useState<IUser>({});
  const [userLogin, setUserLogin] = useState<IUser>({});

  const title = currentType === 'signUp' ? 'Register as a new student' : 'Are you an existing student?';

  const changeLoginSignUpHandler = (id: string) => {
    setModalSignUpOrLoginId(id);
    setIsLogin(!isLogin);
    setCurrentType(currentType === 'login' ? 'signUp' : 'login');
  };

  const changeHandlerSignUp = (id: string, value: string) => {
    setUserSignUp({ ...userSignUp, [id]: value });
  };

  const changeHandlerLogin = (id: string, value: string) => {
    setUserLogin({ ...userLogin, [id]: value });
  };

  const submitSignUpHandler = () => {
    if (userSignUp) {
      onSignUp(userSignUp);
    }
  };

  const submitLoginHandler = () => {
    if (userLogin) {
      onLogin(userLogin);
    }
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
          <Form>
            {currentType === 'signUp' ? (
              <SignUp
                name={userSignUp?.name}
                email={userSignUp?.email}
                password={userSignUp?.password}
                confirmPassword={userSignUp?.confirmPassword}
                country={userSignUp?.country}
                onChange={(id, value) => changeHandlerSignUp(id, value)}
                onSubmit={submitSignUpHandler}
              />
            ) : (
              <Login
                email={userLogin?.email}
                password={userLogin?.password}
                onChange={(id, value) => changeHandlerLogin(id, value)}
                onSubmit={submitLoginHandler}
              />
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
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export { LoginOrSigUp };
