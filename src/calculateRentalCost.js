/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
PRICE_PER_DAY = 40;
  if (days < 3) {
    return PRICE_PER_DAY * days;
  } else if (days >= 3 && days <= 6) {
    return PRICE_PER_DAY * days - 20; // basic discount
  } else {
    return PRICE_PER_DAY * days - 50; // additional discount for 7+ days
  }
}

module.exports = calculateRentalCost;
