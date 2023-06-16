export const paymentPlans = (onClick: (id: string) => void) => {
  return [
    {
      id: 'plan1',
      name: 'PIF (pay in Full)',
      amount: '$6.795',
      totalAmount: '$4.795',
      save: 'Save $1500 in tuition',
      note: 'No processing fees',
      onClick: () => {
        onClick('plan1');
      },
    },
    {
      id: 'plan2',
      name: '16 installments ',
      amount: 'of $399 / Month',
      save: 'Save $500 in tuition',
      note: 'No processing fees',
      interest: '0% interest rate',
      onClick: () => {
        onClick('plan2');
      },
    },
    {
      id: 'plan3',
      name: '24 installments',
      amount: 'of $299 / Month',
      save: 'Save $250 in tuition',
      note: 'No processing fees',
      interest: '5.99% interest rate',
      onClick: () => {
        onClick('plan3');
      },
    },
    {
      id: 'plan4',
      name: '48 installments',
      amount: 'of $199 / Month',
      note: 'No processing fees',
      interest: '11.9% interest rate',
      onClick: () => {
        onClick('plan4');
      },
    },
  ];
};

export const paymentPlansData = [
  {
    id: 'plan1',
    name: 'PIF (pay in Full)',
    amount: '$6.795',
    totalAmount: '$4.795',
    save: 'Save $1500 in tuition',
    note: 'No processing fees',
  },
  {
    id: 'plan2',
    name: '16 installments ',
    amount: 'of $399 / Month',
    save: 'Save $500 in tuition',
    note: 'No processing fees',
    interest: '0% interest rate',
  },
  {
    id: 'plan3',
    name: '24 installments',
    amount: 'of $299 / Month',
    save: 'Save $250 in tuition',
    note: 'No processing fees',
    interest: '5.99% interest rate',
  },
  {
    id: 'plan4',
    name: '48 installments',
    amount: 'of $199 / Month',
    note: 'No processing fees',
    interest: '11.9% interest rate',
  },
];
