import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentPageHeaderItem, headerItems, cards } from '../../utils';
import { CourseCardList } from '../../components/CourseCardList';
import { ModalContent } from '../../components/modalContent';
import { ICourse, IUser } from '../../components/modalContent/types';
import { useLocalStorage } from '../../components/hooks';
import { Modal } from '../../components/modal';
import { Layout } from '../layout';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<'loginOrSignUp' | 'application' | undefined>(undefined);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [user, setUser] = useLocalStorage('user', {});
  const [users, setUsers] = useLocalStorage('users', []);

  const currentUser = users.find((item: IUser) => item.email === user.email);
  const isLogged = !!user.email;

  const onRegisterOrLoginHandler = () => {
    if (isLogged) {
      setUser({});
      window.location.reload();
    } else {
      setShowModal(true);
      setFormType('loginOrSignUp');
    }
  };

  const onEnrollHandler = (course: string) => {
    const courseExist = currentUser?.courses?.find(
      (userCourse: ICourse) => userCourse.title === course,
    );
    if (courseExist) {
      alert('You have registered to this course before');
    } else {
      setSelectedCourse(course);
      setShowModal(true);
      setFormType('application');
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const handleLogin = (user: IUser) => {
    const checkUser = users.find(
      (localStorageUser: IUser) =>
        localStorageUser.email === user.email && localStorageUser.password === user.password,
    );
    if (checkUser) {
      setUser(checkUser);
      alert(`Welcome ${checkUser.name}`);
      setShowModal(false);
      window.location.reload();
    } else {
      alert(`the user ${user.email} does not exist, check your credentials or sign Up instead`);
    }
  };

  const handleSignUp = (user: IUser) => {
    const checkUser = users.find(
      (localStorageUser: IUser) =>
        localStorageUser.email === user.email && localStorageUser.password === user.password,
    );
    if (checkUser) {
      alert(`the user ${user.email} already exist, try login instead`);
    } else {
      setUsers([...users, user]);
      setUser(user);
      alert(`user ${user.name} saved`);
      setShowModal(false);
      window.location.reload();
    }
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='home-view'>
      <Modal isVisible={showModal}>
        <ModalContent
          onClose={closeModalHandler}
          type={formType}
          course={selectedCourse}
          onLogin={handleLogin}
          onSignUp={handleSignUp}
        ></ModalContent>
      </Modal>
      <Layout
        headerItems={headerItemsLayout}
        onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
        currentPage={currentPageHeaderItem.home}
        registerOrLoginOrLogoutLabel={isLogged ? 'Logout' : 'Register or Login'}
      >
        <div className='title'>Available Courses</div>
        <CourseCardList cards={cards} isLogged={isLogged} onEnroll={onEnrollHandler} />
      </Layout>
    </div>
  );
};

export { Home };
