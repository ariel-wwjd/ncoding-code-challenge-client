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
  const [showModal, setShowModal] = useState<boolean>(true);

  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='home-view'>
      <Modal isVisible={showModal}>
        <ModalContent onClose={closeModalHandler} type='loginOrSignUp'></ModalContent>
      </Modal>
      <Layout
        headerItems={headerItemsLayout}
        onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
        currentPage={currentPageHeaderItem.home}
        registerOrLoginOrLogoutLabel='Register or Login'
      >
        <div className='title'>Available Courses</div>
        <CourseCardList cards={cards} />
      </Layout>
    </div>
  );
};

export { Home };
