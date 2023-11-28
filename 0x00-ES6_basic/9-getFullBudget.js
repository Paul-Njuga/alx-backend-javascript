// eslint-disable-next-line
import getBudgetObject from './7-getBudgetObject.js';

/*
 * Method properties are declared directly inside the object,
 * without using the 'function' keyword
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
