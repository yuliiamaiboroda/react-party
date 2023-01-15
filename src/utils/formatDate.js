export const formatDate = date => {
  try {
    return date.toISOString().split('T')[0];
  } catch (error) {
    return '';
  }
};

export const formatCurrentDate = () => {
  const [year, month, day] = formatDate(new Date()).split('-');
  return [day, month, year].join('.');
};
