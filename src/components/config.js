export default
{
  inputs: [
    {
      label: 'Rate',
      type: 'number',
      handleOnChange: 'handleRate',
      value: 'rate',
    },
    {
      label: 'Years',
      type: 'number',
      handleOnChange: 'handleYears',
      value: 'years',
    },
    {
      label: 'Borrowing ammount',
      type: 'number',
      handleOnChange: 'handlePrincipal',
      value: 'principal',
    },
  ],
  buttons: [
    {
      type: 'submit',
      label: 'Calculate',
    },
    {
      type: 'button',
      label: 'Clear',
      handleOnClick: 'handleClear',
    },
  ],
};
