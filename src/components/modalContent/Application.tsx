import PropTypes from 'prop-types';
import { cards, paymentPlans } from '../../utils';
import { IApplication, IUser } from './types';
import { PagesTracker } from '../pagesTracker';
import { ApplicationForm, ApplicationPayment } from '../form';
import { useState } from 'react';
import { useLocalStorage } from '../hooks';
import { paymentPlansData } from '../../utils/paymentPlans';

const Application: React.FC<IApplication> = ({ course, onClose }) => {
  const [currentPage, setCurrentPage] = useState<string>('page1');
  const [currentPaymentId, setCurrentPaymentId] = useState<string>();
  const [user] = useLocalStorage('user', {});
  const [users, setUsers] = useLocalStorage('users', []);
  const currentUser = users.find((item: IUser) => item.email === user.email);

  const onPaymentUpdate = (id: string) => {
    setCurrentPaymentId(id);
  };

  const submitHandler = () => {
    const selectedPaymentPlan = paymentPlansData.find((plan) => plan.id === currentPaymentId);
    const selectedCourse: any = cards.find((card) => card.title === course);
    selectedCourse.paymentPlan = selectedPaymentPlan;

    const newUsers = JSON.parse(JSON.stringify(users));
    const newUser = newUsers.find((item: IUser) => item.email === currentUser.email);
    const userCourses = newUser.courses ? newUser.courses : [];
    newUser.courses = [...userCourses, selectedCourse];

    setUsers(newUsers);
    alert(`congratulations you are register to ${course} now`);
    window.location.reload();
  };

  const onNextHandler = () => {
    setCurrentPage('page2');
  };

  const handlePaymentClick = (id: string) => {
    console.log(id);
  };

  const changeHandler = (id: string, value: string) => {
    const newUsers = JSON.parse(JSON.stringify(users));
    const userArray = newUsers.find((item: IUser) => item.email === currentUser.email);
    userArray[id] = value;
    setUsers(newUsers);
  };

  const payments = paymentPlans(handlePaymentClick);

  const getPage = () => {
    switch (currentPage) {
      case 'page1':
        return (
          <ApplicationForm
            address={currentUser.address ? currentUser.address : ''}
            dateOfBirth={currentUser.dateOfBirth ? currentUser.dateOfBirth : ''}
            educationLevel={currentUser.educationLevel ? currentUser.educationLevel : ''}
            gender={currentUser.gender ? currentUser.gender : ''}
            phoneNumber={currentUser.phoneNumber ? currentUser.phoneNumber : NaN}
            preferredLanguage={currentUser.preferredLanguage ? currentUser.preferredLanguage : ''}
            onChange={(id, value) => {
              changeHandler(id, value);
            }}
            onBack={onClose}
            onNext={onNextHandler}
          />
        );

      case 'page2':
        return (
          <ApplicationPayment
            payments={payments}
            onBack={() => {
              setCurrentPage('page1');
            }}
            onSubmitApplication={submitHandler}
            currentPaymentId={currentPaymentId}
            onPaymentIdChange={(id) => {
              onPaymentUpdate(id);
            }}
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
