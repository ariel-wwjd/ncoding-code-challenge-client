import PropTypes from 'prop-types';
import { Input } from '../input';
import { IApplicationForm } from './types';
import { Button } from '../button';
import { ButtonSize, ButtonType } from '../button/types';

const ApplicationForm: React.FC<IApplicationForm> = ({
  dateOfBirth,
  address,
  educationLevel,
  gender,
  onChange,
  phoneNumber,
  preferredLanguage,
  onBack,
  onNext,
}) => {
  const changeHandler = (id: string, value: string) => {
    onChange(id, value);
  };

  return (
    <div className='application-form'>
      <div className='application-title'>Personal Details</div>
      <div className='subtitle'>
        Have questions about the application? Want some more info? Call us! 65170024
      </div>
      <div className='application-inputs'>
        <div className='double'>
          <div className='input-application first'>
            <Input
              id='dateOfBirth'
              label='Date of birth'
              onChange={(value) => {
                changeHandler('dateOfBirth', value);
              }}
              value={dateOfBirth}
              type='date'
            />
          </div>
          <div className='input-application'>
            <Input
              id='gender'
              label='Gender'
              onChange={(value) => {
                changeHandler('gender', value);
              }}
              placeHolder='Enter your gender'
              value={gender}
            />
          </div>
        </div>
        <div className='input-application'>
          <Input
            id='address'
            label='Address'
            onChange={(value) => {
              changeHandler('address', value);
            }}
            placeHolder='Enter your address'
            value={address}
          />
        </div>
        <div className='input-application'>
          <Input
            id='phoneNumber'
            label='Phone Number'
            onChange={(value) => {
              changeHandler('phoneNumber', value);
            }}
            placeHolder='Enter your phone number'
            value={phoneNumber.toString()}
            type='number'
          />
        </div>
        <div className='double'>
          <div className='input-application first'>
            <Input
              id='preferred-language'
              label='Preferred Language'
              placeHolder='enter your preferred language'
              onChange={(value) => {
                changeHandler('preferredLanguage', value);
              }}
              value={preferredLanguage}
            />
          </div>
          <div className='input-application'>
            <Input
              id='education-level'
              label='Education Level'
              onChange={(value) => {
                changeHandler('educationLevel', value);
              }}
              placeHolder='Enter your education level'
              value={educationLevel}
            />
          </div>
        </div>
      </div>
      <div className='buttons'>
        <div className='button'>
          <Button
            label='Back'
            onClick={onBack}
            type={ButtonType.spherical}
            size={ButtonSize.small}
          />
        </div>
        <div className='button'>
          <Button
            label='Next'
            onClick={onNext}
            type={ButtonType.spherical}
            size={ButtonSize.small}
          />
        </div>
      </div>
    </div>
  );
};

ApplicationForm.propTypes = {
  dateOfBirth: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  educationLevel: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  preferredLanguage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export { ApplicationForm };
