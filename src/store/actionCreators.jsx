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
  HANDLE_CLOSE_INFO,
} from './constants';

export const logInUser = () => ({ type: LOG_IN_USER });

export const handleUserExit = () => ({ type: HANDLE_USER_EXIT });
export const loadState = payload => ({ type: LOAD_STATE, payload });
export const handleChangeSearch = payload => dispatch => {
  const { text, paylist } = payload;
  const arrSearch = [];
  const isOpenSearch = text !== '' ? true : false;
  paylist.forEach(item => {
    let result = 0;
    if (item.name.toLowerCase().indexOf(text) !== -1) result++;
    if (String(item.amount).indexOf(text) !== -1) result++;
    if (item.date.indexOf(text) !== -1) result++;
    if (item.status.toLowerCase().indexOf(text) !== -1) result++;
    if (item.details.receiver.toLowerCase().indexOf(text) !== -1) result++;
    if (result !== 0) arrSearch.push(item);
  });

  dispatch({
    type: HANDLE_CHANGE_SEARCH,
    payload: { arrSearch, isOpenSearch },
  });
};
export const handleChooseSearch = () => ({ type: HANDLE_CHOOSE_SEARCH });
export const handleOpenInfo = payload => dispatch => {
  const { id, paylist } = payload;
  const infoCard = paylist.filter(item => item.id === id)[0];
  const isOpenInfo = id > 0 ? true : false;
  dispatch({
    type: HANDLE_OPEN_INFO,
    payload: { isOpenInfo, infoCard },
  });
};
export const handleCloseInfo = () => ({ type: HANDLE_CLOSE_INFO });
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
export const handleSortDirection = payload => dispatch => {
  let paylist = [];
  if (payload.key === 0) {
    paylist = payload.paylist.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return payload.sortList[0].direction
        ? x < y
          ? -1
          : x > y
          ? 1
          : 0
        : x > y
        ? -1
        : x < y
        ? 1
        : 0;
    });
  }
  if (payload.key === 1) {
    paylist = payload.paylist.sort((a, b) => {
      return payload.sortList[1].direction
        ? a.amount - b.amount
        : b.amount - a.amount;
    });
  }
  if (payload.key === 2) {
    paylist = payload.paylist.sort((a, b) => {
      const x = new Date(a.date).getTime();
      const y = new Date(b.date).getTime();
      return payload.sortList[2].direction ? x - y : y - x;
    });
  }
  if (payload.key === 3) {
    paylist = payload.paylist.sort((a, b) => {
      const x = a.status.toLowerCase();
      const y = b.status.toLowerCase();
      return payload.sortList[3].direction
        ? x < y
          ? -1
          : x > y
          ? 1
          : 0
        : x > y
        ? -1
        : x < y
        ? 1
        : 0;
    });
  }
  if (payload.key === 4) {
    paylist = payload.paylist.sort((a, b) => {
      const x = a.details.receiver.toLowerCase();
      const y = b.details.receiver.toLowerCase();
      return payload.sortList[4].direction
        ? x < y
          ? -1
          : x > y
          ? 1
          : 0
        : x > y
        ? -1
        : x < y
        ? 1
        : 0;
    });
  }

  const sortList = payload.sortList.map((item, key) => {
    return key === payload.key ? { ...item, direction: !item.direction } : item;
  });

  dispatch({ type: HANDLE_SORT_DIRECTION, payload: { paylist, sortList } });
};
