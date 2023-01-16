import i18n from 'utils'

export const handlerCategories = fetchedCategory => {
  const categories = i18n.options.resources.en.translation.catList;


  for (const key in categories) {
    if (categories[key] === fetchedCategory) {
      return ('catList.' + key);
    }
  }
};
