/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './styles.scss';
import { ISelector } from './types';
import { className } from '../../utils';

const Selector:React.FC<ISelector> = ({ options, currentOptionId = options[0].id, onClick }) => {

  const optionList = options.map((option) => (
    <li 
      className={`option ${className('active')(option.id === currentOptionId)}`} 
      key={option.id}
      onClick={() => {onClick(option.id)}}
    >
      {option.label}
    </li>
  ));

  return (
    <div className="selector-component">
      <ul className='options'>
        {optionList}
      </ul>
    </div>
  )
}

// TODO: Find the right way to declare the prop types of options prop 
Selector.propTypes = {
  // options: PropTypes.arrayOf(),
  currentOptionId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export { Selector };
