export const shortenAddress = (address = "") => {
  return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
};
export const getRandomIntInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
