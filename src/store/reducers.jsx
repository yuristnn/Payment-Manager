import {
  LOG_IN_USER,
  HANDLE_USER_EXIT,
  LOAD_STATE,
  HANDLE_SORT_DIRECTION,
  HANDLE_CHANGE_SEARCH,
  HANDLE_CHOOSE_SEARCH,
  HANDLE_OPEN_INFO,
  HANDLE_CLOSE_INFO,
  HANDLE_CHANGE_FILTER_AMOUNT_MIN,
  HANDLE_CHANGE_FILTER_AMOUNT_MAX,
  HANDLE_CHANGE_FILTER_STATUS,
  HANDLE_CHANGE_FILTER_DATE_MIN,
  HANDLE_CHANGE_FILTER_DATE_MAX,
  HANDLE_IS_OPEN_NEW_PAYMENT,
} from './constants';

const initialState = {
  isAuthorized: false,

  email: '',
  balance: 0,

  paylist: [],

  isOpenNew: false,
  isOpenSearch: false,
  search: [],

  sortList: [
    { name: 'Наименование', direction: true },
    { name: 'Сумма', direction: true },
    { name: 'Дата', direction: true },
    { name: 'Статус', direction: true },
    { name: 'Получатель', direction: true },
  ],

  isOpenInfo: false,
  infoCard: [],

  filterDate: {
    arrDate: [],
    min: 0,
    max: 0,
  },
  filterAmount: {
    arrAmount: [],
    min: 0,
    max: 0,
  },
  filterStatus: 'Показать все',
};

export default (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        isAuthorized: payload.isAuthorized,
      };
    case HANDLE_USER_EXIT:
      return {
        ...state,
        isAuthorized: payload.isAuthorized,
        email: payload.email,
        balance: payload.balance,
        paylist: payload.paylist,
      };
    case LOAD_STATE:
      return {
        ...state,
        paylist: payload.paylist,
        email: payload.email,
        balance: payload.balance,
        filterAmount: {
          ...state.filterAmount,
          arrAmount: payload.filterAmount.arrAmount,
          min: payload.filterAmount.min,
          max: payload.filterAmount.max,
        },
        filterDate: {
          ...state.filterDate,
          arrDate: payload.filterDate.arrDate,
          min: payload.filterDate.min,
          max: payload.filterDate.max,
        },
      };

    case HANDLE_CHOOSE_SEARCH:
      return {
        ...state,
        isOpenSearch: payload.isOpenSearch,
      };
    case HANDLE_CHANGE_SEARCH:
      return {
        ...state,
        isOpenSearch: payload.isOpenSearch,
        search: payload.arrSearch,
      };
    case HANDLE_OPEN_INFO:
      return {
        ...state,
        isOpenInfo: payload.isOpenInfo,
        infoCard: payload.infoCard,
      };
    case HANDLE_CLOSE_INFO:
      return {
        ...state,
        isOpenInfo: !state.isOpenInfo,
      };
    case HANDLE_CHANGE_FILTER_AMOUNT_MIN:
      return {
        ...state,
        filterAmount: { ...state.filterAmount, min: payload },
      };
    case HANDLE_CHANGE_FILTER_AMOUNT_MAX:
      return {
        ...state,
        filterAmount: { ...state.filterAmount, max: payload },
      };
    case HANDLE_CHANGE_FILTER_STATUS:
      return { ...state, filterStatus: payload };
    case HANDLE_CHANGE_FILTER_DATE_MIN:
      return {
        ...state,
        filterDate: { ...state.filterDate, min: payload },
      };
    case HANDLE_CHANGE_FILTER_DATE_MAX:
      return {
        ...state,
        filterDate: { ...state.filterDate, max: payload },
      };
    case HANDLE_IS_OPEN_NEW_PAYMENT:
      return { ...state, isOpenNew: payload.isOpenNew };
    case HANDLE_SORT_DIRECTION:
      return {
        ...state,
        sortList: payload.sortList,
        paylist: payload.paylist,
      };

    default:
      return state;
  }
};
