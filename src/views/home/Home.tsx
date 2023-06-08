import { useNavigate } from 'react-router-dom';
import { currentPageHeaderItem, headerItems } from '../../utils';
import { Layout } from '../layout';
import { CourseCard } from '../../components/courseCard';

const Home = () => {
  const navigate = useNavigate();

  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  const headerItemsLayout = headerItems(navigate);
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...';

  return (
    <Layout
      headerItems={headerItemsLayout}
      onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
      currentPage={currentPageHeaderItem.home}
      registerOrLoginOrLogoutLabel='Register or Login'
    >
      <CourseCard
        id='java'
        name='Java'
        title='Java Advanced'
        description={description}
        duration='3:20hr'
        review={{ stars: 4.5, people: 422 }}
        action={{
          buttonLabel: 'Enroll',
          onButtonClick: () => {
            console.log('click');
          },
        }}
      />
    </Layout>
  );
};

export { Home };
