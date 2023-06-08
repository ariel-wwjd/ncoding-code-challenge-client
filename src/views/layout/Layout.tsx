/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { ILayout } from './types';
import './styles.scss';

const Layout: React.FC<ILayout> = ({ children, headerItems, onRegisterOrLogin, currentPage }) => {
  const onRegisterOrLoginHandler = () => {
    onRegisterOrLogin();
  };

  return (
    <div className='layout-view'>
      <Header
        navItems={headerItems}
        onRegisterOrLogin={onRegisterOrLoginHandler}
        currentPage={currentPage}
      />
      <div className='content'>{children}</div>
      <Footer
        items={[
          '© 2021 NCoding®',
          'Regulatory Information',
          'Terms of Use & Privacy Policy',
          'Careers',
        ]}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  // headerItems: TODO: find the right way to use prop types from  IHeaderItem as in the Header.tsx file
  onRegisterOrLogin: PropTypes.func.isRequired,
};

export { Layout };
