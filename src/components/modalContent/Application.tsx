import PropTypes from 'prop-types';
import { paymentPlans } from '../../utils';
import { IApplication } from './types';
import { PagesTracker } from '../pagesTracker';
import { ApplicationForm, ApplicationPayment } from '../form';
import { useState } from 'react';

const Application: React.FC<IApplication> = ({ course, onClose }) => {
  const [currentPage, setCurrentPage] = useState<string>('page1');

  const handlePaymentClick = (id: string) => {
    console.log(id);
  };

  const payments = paymentPlans(handlePaymentClick);

  const getPage = () => {
    switch (currentPage) {
      case 'page1':
        return (
          <ApplicationForm
            address=''
            dateOfBirth=''
            educationLevel=''
            gender=''
            phoneNumber={0}
            preferredLanguage=''
            onChange={() => {
              console.log('change');
            }}
            onBack={onClose}
            onNext={() => {setCurrentPage('page2')}}
          />
        );

      case 'page2':
        return (
          <ApplicationPayment
            payments={payments}
            onBack={() => {setCurrentPage('page1')}}
            onSubmitApplication={() => {console.log('SUBMIT');}}
          />
        );

      default:
        break;
    }
  };

  return (
    <div className='modal-application'>
      <div className='form-title'>Application process {course}</div>
      <PagesTracker
        pages={[
          { id: 'page1', name: 'Personal Information', page: 1 },
          { id: 'page2', name: 'Payment Plan', page: 2 },
        ]}
        currentPageId={currentPage}
      />
      <div className='dates'>Start: May 21 | Graduation: Dec. 21</div>
      {getPage()}
    </div>
  );
};

Application.propTypes = {
  course: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export { Application };
