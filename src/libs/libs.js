export const formattingNumber = num => {
  let value = num;
  value = value.toString();
  value = value.replace(/\D/g, '');
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return value;
};

export const isNumber = val => !isNaN(Number(val));