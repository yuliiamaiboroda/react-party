export const formatDateInStr = date => {
  const dArr = date.split('-');
  return dArr[2] + '.' + dArr[1] + '.' + dArr[0].substring(2);
};

export const formatTransType = type => (type === 'INCOME' ? '+' : '-');

export const switchColor = type => (type === 'INCOME' ? '#24CCA7' : '#FF6596');
