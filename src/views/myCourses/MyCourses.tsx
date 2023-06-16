import { useNavigate } from 'react-router-dom';
import { currentPageHeaderItem, headerItems } from '../../utils';
import { CourseCardList } from '../../components/CourseCardList';
import { IUser } from '../../components/modalContent/types';
import { useLocalStorage } from '../../components/hooks';
import { Modal } from '../../components/modal';
import { Layout } from '../layout';
import './styles.scss';

const MyCourses = () => {
  const [user, setUser] = useLocalStorage('user', {});
  const [users] = useLocalStorage('users', []);

  const currentUser = users.find((item: IUser) => item.email === user.email);
  const courses = currentUser?.courses ? currentUser?.courses : [];

  const navigate = useNavigate();

  const onLogoutHandler = () => {
    setUser({});
    window.location.reload();
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='my-courses-view'>
      <Modal></Modal>
      <Layout
        headerItems={headerItemsLayout}
        onRegisterOrLoginOrLogout={onLogoutHandler}
        currentPage={currentPageHeaderItem.myCourses}
        registerOrLoginOrLogoutLabel='Logout'
      >
        <div className='title'>My Courses</div>
        <div className='cards-container'>
          <CourseCardList
            cards={courses}
            isLogged
            onEnroll={() => {
              console.log('details');
            }}
          />
        </div>
      </Layout>
    </div>
  );
};

export { MyCourses };
