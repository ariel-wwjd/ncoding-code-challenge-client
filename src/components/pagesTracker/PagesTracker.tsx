/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { IPagesTracker } from './types';
import './styles.scss';
import { className } from '../../utils';

const PagesTracker: React.FC<IPagesTracker> = ({ pages, currentPageId = pages[0].id }) => {
  const generatePages = pages.map((page) => (
    <div className={`page ${className('inactive')(currentPageId !== page.id)}`} key={page.id}>
      <div className='number'>{page.page}</div>
      <div className='page-name'>{page.name}</div>
    </div>
  ));

  return <div className='pages-tracker-component'>{generatePages}</div>;
};

// TODO: Find the correct way to declare the prop types for pages
PagesTracker.propTypes = {
  // pages: PropTypes.arrayOf(),
  currentPageId: PropTypes.string,
};

export { PagesTracker };
