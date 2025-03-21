function makeChange(amount) {
  let change = {
    q: 0, // Quarters
    d: 0, // Dimes
    n: 0, // Nickels
    p: 0  // Pennies
  };

  // Calculate the number of quarters
  change.q = Math.floor(amount / 25);
  amount = amount % 25;

  // Calculate the number of dimes
  change.d = Math.floor(amount / 10);
  amount = amount % 10;

  // Calculate the number of nickels
  change.n = Math.floor(amount / 5);
  amount = amount % 5;

  // The remaining amount is in pennies
  change.p = amount;

  return change;
}
