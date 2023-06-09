import { useNavigate } from 'react-router-dom';
import { CourseCardList } from '../../components/CourseCardList';
import { currentPageHeaderItem, headerItems, cards } from '../../utils';
import { Layout } from '../layout';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <div className='home-view'>
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
