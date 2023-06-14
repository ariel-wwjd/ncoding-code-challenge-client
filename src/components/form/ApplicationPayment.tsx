/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonSize, ButtonType } from '../button/types';
import { PaymentCard } from '../paymentCard';
import { Button } from '../button';
import { IApplicationPayment } from './types';
import './styles.scss';

const ApplicationPayment: React.FC<IApplicationPayment> = ({
  payments,
  currentPaymentId,
  onBack,
  onSubmitApplication,
}) => {
  const [current, setCurrent] = useState<string | undefined>(currentPaymentId);

  const clickHandler = (id: string) => {
    setCurrent(id);
  };

  const cards = payments.map((card) => (
    <div key={card.id} className='card-payment'>
      <PaymentCard
        id={card.id}
        name={card.name}
        amount={card.amount}
        note={card.note}
        save={card.save}
        totalAmount={card.totalAmount}
        onClick={(id) => clickHandler(id)}
        interest={card.interest}
        isSelected={current === card.id}
      />
    </div>
  ));

  return (
    <div className='application-payment'>
      <div className='form-title'>Payment Plan</div>
      <div className='cards-container'>{cards}</div>
      <div className='buttons'>
        <div className='button'>
          <Button
            label='Back'
            onClick={onBack}
            type={ButtonType.spherical}
            size={ButtonSize.small}
          />
        </div>
        <div className='button'>
          <Button
            label='Submit Enrollment'
            onClick={onSubmitApplication}
            type={ButtonType.spherical}
            size={ButtonSize.small}
          />
        </div>
      </div>
    </div>
  );
};

// TODO: find the right way to define the PropTypes for payments
ApplicationPayment.propTypes = {
  // payments: PropTypes.arrayOf(),
  currentPaymentId: PropTypes.string,
};

export { ApplicationPayment };
