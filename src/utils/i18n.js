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
        month: {
          january: 'January',
          february: 'February',
          march: 'March',
          april: 'April',
          may: 'May',
          june: 'June',
          july: 'July',
          august: 'August',
          september: 'September',
          october: 'October',
          november: 'November',
          december: 'December',
        },
        diagramTab: {
          title: 'Statistics',
        },
        addTrans: {
          add: 'Add transaction',
          toggInc: 'Income',
          toggExp: 'Expense',
          placeholderCat: 'Select a category',
          placeholderComm: 'Comment',
          addBtn: 'Add',
          cancelBtn: 'Cancel',
          requiredField: 'Required field',
        },
        table: {
          category: 'Category',
          sum: 'Sum',
          noTrans: 'There are no transactions',
          expenses: 'Expenses:',
          income: 'Income:',
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
        month: {
          january: 'Січень',
          february: 'Лютий',
          march: 'Березень',
          april: 'Квітень',
          may: 'Травень',
          june: 'Червень',
          july: 'Липень',
          august: 'Серпень',
          september: 'Вересень',
          october: 'Жовтень',
          november: 'Листопад',
          december: 'Грудень',

        },
        diagramTab: {
          title: 'Статистика',
        },
        addTrans: {
          add: 'Додати транзакцію',
          toggInc: 'Дохід',
          toggExp: 'Витрати',
          placeholderCat: 'Виберіть категорію',
          placeholderComm: 'Коментар',
          addBtn: 'Додати',
          cancelBtn: 'Скасувати',
          requiredField: 'Обов`язкове поле',
        },
        table: {
          category: 'Категорія',
          sum: 'Сума',
          noTrans: 'Транзакцій не знайдено',
          expenses: 'Витрати:',
          income: 'Дохід:',

        },
      },
    },
  },
});

export default i18n;
