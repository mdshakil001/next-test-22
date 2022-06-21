export const currencyFormatter = (number) => {
  const formatter = new Intl.NumberFormat("en-SG", { currency: "SGD", style: "decimal" });
  return formatter.format(number);
};
