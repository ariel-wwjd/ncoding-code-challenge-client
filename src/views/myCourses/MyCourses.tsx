import { useNavigate } from 'react-router-dom';
import { currentPageHeaderItem, headerItems, myCards } from '../../utils';
import { CourseCardList } from '../../components/CourseCardList';
import { Modal } from '../../components/modal';
import { Layout } from '../layout';
import './styles.scss';

const MyCourses = () => {
  const navigate = useNavigate();

  const onRegisterOrLoginHandler = () => {
    console.log('LOGOUT');
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='my-courses-view'>
      <Modal></Modal>
      <Layout
        headerItems={headerItemsLayout}
        onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
        currentPage={currentPageHeaderItem.myCourses}
        registerOrLoginOrLogoutLabel='Logout'
      >
        <div className='title'>My Courses</div>
        <div className='cards-container'>
          <CourseCardList cards={myCards} isLogged />
        </div>
      </Layout>
    </div>
  );
};

export { MyCourses };
