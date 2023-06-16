import PropTypes from 'prop-types';
import { className } from '../../utils';
import { IPaymentCard } from './types';
import './styles.scss';

const PaymentCard: React.FC<IPaymentCard> = ({
  id,
  name,
  amount,
  interest,
  note,
  save,
  totalAmount,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`payment-card-component ${className('selected')(isSelected)}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick(id);
      }}
    >
      <div className='payment'>
        <div className='name'>{name}</div>
        <div className='amount'>{amount}</div>
        <div className='total-amount'>{totalAmount}</div>
      </div>
      <div className='extra-info'>
        <div className='save'>{save}</div>
        <div className='note'>{note}</div>
        <div className='interest'>{interest}</div>
      </div>
    </div>
  );
};

PaymentCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  totalAmount: PropTypes.string,
  save: PropTypes.string,
  note: PropTypes.string,
  interest: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export { PaymentCard };
