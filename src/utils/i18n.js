import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  // debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, 
  },
  resources: {
    en: {
      translation: {
        catList: {
          mainExpenses: 'Main expenses',
          products: 'Products',
          car: 'Car',
          selfCare: 'Self care',
          childCare: 'Child care',
          householdProducts: 'Household products',
          education: 'Education',
          leisure: 'Leisure',
          otherExpenses: 'Other expenses',
          entertainment: 'Entertainment',
          income: 'Income',
        },
        table: {
          category: 'Category',
          sum: 'Sum',
        },
      },
    },
    uk: {
      translation: {
        catList: {
          mainExpenses: 'Основні витрати',
          products: 'Продукти',
          car: 'Автомобіль',
          selfCare: 'Особистий догляд',
          childCare: 'Догляд за дитиною',
          householdProducts: 'Товари для дому',
          education: 'Освіта',
          leisure: 'Дозвілля',
          otherExpenses: 'Інші витрати',
          entertainment: 'Розваги',
          income: 'Дохід',
        },
        table: {
          category: 'Категорія',
          sum: 'Сума',
        },
      },
    },
  },
});

export default i18n;
