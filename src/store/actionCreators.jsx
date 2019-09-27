import {
  LOG_IN_USER,
  HANDLE_USER_EXIT,
  LOAD_STATE,
  HANDLE_SORT_DIRECTION,
  HANDLE_CHANGE_SEARCH,
  HANDLE_CHOOSE_SEARCH,
  HANDLE_OPEN_INFO,
  HANDLE_CHANGE_FILTER_AMOUNT_MIN,
  HANDLE_CHANGE_FILTER_AMOUNT_MAX,
  HANDLE_CHANGE_FILTER_STATUS,
  HANDLE_CHANGE_FILTER_DATE_MIN,
  HANDLE_CHANGE_FILTER_DATE_MAX,
  HANDLE_NEW_PAYMENT,
  HANDLE_CREATE_PAYMENT,
  HANDLE_CANCEL_PAYMENT,
} from './constants';

export const logInUser = () => ({ type: LOG_IN_USER });

export const handleUserExit = () => ({ type: HANDLE_USER_EXIT });
export const loadState = payload => ({ type: LOAD_STATE, payload });
export const handleChangeSearch = payload => ({
  type: HANDLE_CHANGE_SEARCH,
  payload,
});
export const handleChooseSearch = () => ({ type: HANDLE_CHOOSE_SEARCH });
export const handleOpenInfo = payload => ({
  type: HANDLE_OPEN_INFO,
  payload: { id: payload, isOpen: payload > 0 ? true : false },
});
export const handleChangeFilterAmountMin = payload => ({
  type: HANDLE_CHANGE_FILTER_AMOUNT_MIN,
  payload,
});
export const handleChangeFilterAmountMax = payload => ({
  type: HANDLE_CHANGE_FILTER_AMOUNT_MAX,
  payload,
});
export const handleChangeFilterStatus = payload => ({
  type: HANDLE_CHANGE_FILTER_STATUS,
  payload,
});
export const handleChangeFilterDateMin = payload => ({
  type: HANDLE_CHANGE_FILTER_DATE_MIN,
  payload: new Date(payload),
});
export const handleChangeFilterDateMax = payload => ({
  type: HANDLE_CHANGE_FILTER_DATE_MAX,
  payload: new Date(payload),
});
export const handleNewPayment = () => ({ type: HANDLE_NEW_PAYMENT });
export const handleCreatePayment = payload => ({
  type: HANDLE_CREATE_PAYMENT,
  payload,
});
export const handleCancelPayment = () => ({ type: HANDLE_CANCEL_PAYMENT });
export const handleSortDirection = payload => ({
  type: HANDLE_SORT_DIRECTION,
  payload,
});
