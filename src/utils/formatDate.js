export const formatDate = date => {
  try {
    return date.toISOString().split('T')[0];
  } catch (error) {
    return '';
  }
};
