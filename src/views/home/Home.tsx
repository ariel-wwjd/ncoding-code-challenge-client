import { currentPageHeaderItem, headerItems } from '../../utils';
import { Layout } from '../layout';

const Home = () => {
  const onRegisterOrLoginHandler = () => {
    console.log('REGISTER OR LOGIN');
  };

  return (
    <Layout headerItems={headerItems} onRegisterOrLogin={onRegisterOrLoginHandler} currentPage={currentPageHeaderItem.home}>
      HOME PAGE
    </Layout>
  )
}

export { Home };
