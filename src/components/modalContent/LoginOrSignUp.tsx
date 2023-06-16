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

  const title =
    currentType === 'signUp' ? 'Register as a new student' : 'Are you an existing student?';

  const emailRegex = /^[^\s@]+@[^\s@]+$/;

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
    let errorMessage = 'The field(s) ';
    let noErrors = true;

    if (!userSignUp.name || userSignUp.name === '') {
      errorMessage = errorMessage + 'Username ';
      noErrors = false;
    }
    if (!userSignUp.email || userSignUp.email === '') {
      errorMessage = errorMessage + 'Email ';
      noErrors = false;
    }
    if (!userSignUp.password || userSignUp.password === '') {
      errorMessage = errorMessage + 'Password ';
      noErrors = false;
    }
    if (!userSignUp.confirmPassword || userSignUp.confirmPassword === '') {
      errorMessage = errorMessage + 'Confirm Password ';
      noErrors = false;
    }

    errorMessage = errorMessage + 'are required ';

    if (userSignUp.password !== userSignUp.confirmPassword) {
      if (noErrors) {
        errorMessage = 'The password and confirm password does not match';
      } else {
        errorMessage = errorMessage + 'and the password and confirm password does not match';
      }
      noErrors = false;
    }

    if (!emailRegex.test(userSignUp.email ? userSignUp.email : '')) {
      if (noErrors) {
        errorMessage = 'The email does not look correct make sure you have @ or .com';
      } else {
        errorMessage =
          errorMessage +
          'and the email does not look correct make sure you have included @ and the domain';
      }
      noErrors = false;
    }

    if (userSignUp && noErrors) {
      onSignUp(userSignUp);
    } else {
      alert(errorMessage);
    }
  };

  const submitLoginHandler = () => {
    let errorMessage = 'The field(s) ';
    let noErrors = true;

    if (!userLogin.email || userLogin.email === '') {
      errorMessage = errorMessage + 'Username ';
      noErrors = false;
    }
    if (!userLogin.password || userLogin.password === '') {
      errorMessage = errorMessage + 'Password ';
      noErrors = false;
    }

    errorMessage = errorMessage + 'are required';

    if (!emailRegex.test(userLogin.email ? userLogin.email : '')) {
      if (noErrors) {
        errorMessage = 'The email does not look correct make sure you have @ or .com';
      } else {
        errorMessage =
          errorMessage +
          'and the email does not look correct make sure you have included @ and the domain ';
      }
      noErrors = false;
    }

    if (userLogin && noErrors) {
      onLogin(userLogin);
    } else {
      alert(errorMessage);
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
