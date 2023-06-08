import { useNavigate } from 'react-router-dom';
import { currentPageHeaderItem, headerItems } from '../../utils';
import { Layout } from '../layout';

const MyCourses = () => {
  const navigate = useNavigate();

  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  const headerItemsLayout = headerItems(navigate);

  return (
    <Layout
      headerItems={headerItemsLayout}
      onRegisterOrLoginOrLogout={onRegisterOrLoginHandler}
      currentPage={currentPageHeaderItem.myCourses}
      registerOrLoginOrLogoutLabel='Logout'
    >
      My Courses Page
    </Layout>
  );
};

export { MyCourses };
