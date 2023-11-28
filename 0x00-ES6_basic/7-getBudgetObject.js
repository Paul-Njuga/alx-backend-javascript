/*
 * Shorthand property syntax in JS, allows you to use,
 * the variable names directly as the keys,
 * when they match the property names
 */

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
