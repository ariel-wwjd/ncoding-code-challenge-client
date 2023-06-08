import PropTypes from 'prop-types';
import { IFooter } from './types';
import './styles.scss';

const Footer: React.FC<IFooter> = ({ items }) => {
  const footerItems = items.map((item) => (
    <li className='item' key={item}>
      {item}
    </li>
  ));

  return (
    <div className='footer-component'>
      <ul className='items'>{footerItems}</ul>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export { Footer };
