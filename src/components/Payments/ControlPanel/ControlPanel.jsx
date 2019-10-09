import React from 'react';
import {
  ControlPanelWrapper,
  FilterStatus,
  FilterWrapperDate,
  FilterLabelText,
  FilterWrapperAmount,
  FilterTextSeparator,
  WrapperSearch,
  NewPayment,
} from './common/styles';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';
import 'date-fns';

export const ControlPanel = ({
  paylist,
  filterStatus,
  filterAmount,
  filterDate,
  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,
  handleNewPayment,
  handleChangeSearch,
  handleOpenSearch,
}) => {
  const onKeyPress = event => {
    event.keyCode === 13 && handleOpenSearch();
  };

  return (
    <ControlPanelWrapper>
      <NewPayment color="primary" onClick={handleNewPayment}>
        <AddIcon fontSize="large" />
      </NewPayment>
      <FilterWrapperDate>
        <FilterLabelText>Дата:</FilterLabelText>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            cancelLabel="Отмена"
            okLabel="ОК"
            format="dd.MM.yyyy"
            value={filterDate.min}
            onChange={handleChangeFilterDateMin}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <FilterTextSeparator>-</FilterTextSeparator>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            cancelLabel="Отмена"
            okLabel="ОК"
            format="dd.MM.yyyy"
            value={filterDate.max}
            onChange={handleChangeFilterDateMax}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </FilterWrapperDate>
      <FilterWrapperAmount>
        <FilterLabelText>Сумма:</FilterLabelText>
        <TextField
          value={filterAmount.min}
          onChange={event => handleChangeFilterAmountMin(event.target.value)}
        />
        <FilterTextSeparator>-</FilterTextSeparator>
        <TextField
          value={filterAmount.max}
          onChange={event => handleChangeFilterAmountMax(event.target.value)}
        />
      </FilterWrapperAmount>
      <FilterLabelText>Статус:</FilterLabelText>
      <FilterStatus
        value={filterStatus}
        onChange={event => handleChangeFilterStatus(event.target.value)}
      >
        <MenuItem value="Показать все">Показать все</MenuItem>
        <MenuItem value="Создан">Создан</MenuItem>
        <MenuItem value="В работе">В работе</MenuItem>
        <MenuItem value="Платеж проведен">Платеж проведен</MenuItem>
      </FilterStatus>
      <WrapperSearch>
        <TextField
          placeholder="Поиск..."
          type="search"
          onKeyDown={event => onKeyPress(event)}
          onChange={event =>
            handleChangeSearch({
              text: event.target.value.toLowerCase(),
              paylist,
            })
          }
        />
      </WrapperSearch>
    </ControlPanelWrapper>
  );
};
