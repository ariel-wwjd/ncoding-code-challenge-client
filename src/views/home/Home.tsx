import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseCardList } from '../../components/CourseCardList';
import { currentPageHeaderItem, headerItems, cards } from '../../utils';
import { Modal } from '../../components/modal';
import { ModalContent } from '../../components/modalContent';
import { Layout } from '../layout';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<'loginOrSignUp' | 'application' | undefined>(undefined)
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  
  // TODO: replace this value with the used data 
  const isLogged = true

  const onRegisterOrLoginHandler = () => {
    setShowModal(true)
    setFormType('loginOrSignUp')
  };

  const onEnrollHandler = (course: string) => {
    setSelectedCourse(course);
    setShowModal(true)
    setFormType('application')
  }

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='home-view'>
      <Modal isVisible={showModal}>
        <ModalContent onClose={closeModalHandler} type={formType} course={selectedCourse}></ModalContent>
      </Modal>
      <Layout
        headerItems={headerItemsLayout}
        onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
        currentPage={currentPageHeaderItem.home}
        registerOrLoginOrLogoutLabel='Register or Login'
      >
        <div className='title'>Available Courses</div>
        <CourseCardList 
          cards={cards}
          isLogged={isLogged}
          onEnroll={onEnrollHandler}
        />
      </Layout>
    </div>
  );
};

export { Home };
