import { currentPageHeaderItem, headerItems } from '../../utils';
import { Layout } from '../layout';

const MyCourses = () => {
  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  return (
    <Layout headerItems={headerItems} onRegisterOrLogin={onRegisterOrLoginHandler} currentPage={currentPageHeaderItem.myCourses}>
      My Courses Page
    </Layout>
  )
}

export { MyCourses };
