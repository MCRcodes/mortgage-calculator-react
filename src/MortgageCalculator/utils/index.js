const calculateMonthlyRepayment = (rate, years, principal) => {
  const rateInPercentage = rate / 100 / 12;
  const numberOfPayments = years * 12;
  const numerator = rateInPercentage * Math.pow(1 + rateInPercentage, numberOfPayments);
  const denominator = Math.pow(1 + rateInPercentage, numberOfPayments) - 1;
  return Math.round(principal * (numerator / denominator));
};

export default calculateMonthlyRepayment;
