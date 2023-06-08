import { currentPageHeaderItem, headerItems } from '../../utils';
import { Layout } from '../layout';

const AvailableCourses = () => {
  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  return (
    <Layout
      headerItems={headerItems}
      onRegisterOrLogin={onRegisterOrLoginHandler}
      currentPage={currentPageHeaderItem.availableCourses}
    >
      Available Courses Page
    </Layout>
  );
};

export { AvailableCourses };
