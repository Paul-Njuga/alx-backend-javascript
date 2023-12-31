import Currency from './3-currency';

/**
 * Represents a Pricing class with,
 * static and instance methods.
 * @class
 */

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  /**
   * Create instances of Pricing.
   * @constructor
   * @param {number} amount
   * @param {Currency} currency
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter methods for each attribute.
   * Setter methods for each attribute with type validation.
   * @param {number|Currency} value - The value to set.
   */
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') throw new TypeError('Amount must be a number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('Currency must be a Currency instance');
    this._amount = value;
  }

  /**
   * Static Methods:
   *   Defined using the static keyword.
   *   Belongs to the class itself, not instances of the class.
   *   Cannot access or modify instance-specific properties.
   *   Called on the class, not on instances ->
   *     const c = Pricing.conversionRate(100, 0.96); // Call static method
   *     c.displayFullPrice(); // Works bcs `conversionRate` returns an instance.
   */
  /**
   * Static method: Convert price using convertion rate.
   * @static
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number} product
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  /**
   * Instance Methods:
   *   Defined without the static keyword.
   *   Belongs to instances of the class.
   *   Can access and modify instance-specific properties.
   *   Called on instances, not on the class ->
   *     const p = new Pricing(100, new Currency("EUR", "Euro"))
   *     p.displayFullPrice(); // Call instance method
   */
  /**
   * Instance method: Compute full price.
   * @returns {string} 'amount currency_name (currency_code)'
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
}
