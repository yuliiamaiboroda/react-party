export const formatDate = date => {
  return date.toISOString().split('T')[0];
};
