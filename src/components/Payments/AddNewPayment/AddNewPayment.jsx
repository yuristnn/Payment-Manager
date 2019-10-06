import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import 'date-fns';
import {
  AddNewPaymentForm,
  AddNewPaymentHead,
  AddNewPaymentInput,
  AddNewPaymentInputAmount,
  AddNewPaymentInputWrapper,
  AddNewPaymentButtonWrapper,
  AddNewPaymentStatus,
  AddNewPaymentDate,
  AddNewPaymentInputAccountNumber,
} from './common/styles';

export const AddNewPayment = ({
  loadNewPayment,
  handleCancelPayment,
  balance,
}) => {

  const [name, setName] = useState({ text: '', isEmpty: false });
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10),
  );
  const [status, setStatus] = useState('Создан');
  const [amount, setAmount] = useState({ text: '', isEmpty: false });
  const [receiver, setReceiver] = useState({ text: '', isEmpty: false });
  const [accountNumber, setAccountNumber] = useState({
    text: '',
    isEmpty: false,
  });
  const [bank, setBank] = useState({ text: '', isEmpty: false });
  const [bic, setBic] = useState({ text: '', isEmpty: false });
  const [corresp, setCorresp] = useState({ text: '', isEmpty: false });
  const [isErrorEmpty, setIsErrorEmpty] = useState(false);

  const handleNameChange = name => {
    setName({ text: name.slice(0, 50), isEmpty: name === '' ? false : true });
  };

  const handleDateChange = date => {
    setDate(
      new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10),
    );
  };

  const handleChangeAmount = amount => {
    setAmount({
      text: Math.abs(+amount) === 0 ? '' : Math.abs((+amount).toFixed(2)),
      isEmpty: amount > balance || amount === '' || amount < 0 ? false : true,
    });
  };

  const handleReceiverChange = receiver => {
    setReceiver({
      text: receiver.slice(0, 100),
      isEmpty: receiver === '' ? false : true,
    });
  };

  const handleAccountNumberChange = accountNumber => {
    setAccountNumber({
      text: accountNumber,
      isEmpty: /^[0-9]{20}$/.test(accountNumber),
    });
  };

  const handleBankChange = bank => {
    setBank({
      text: bank.toUpperCase().slice(0, 100),
      isEmpty: bank === '' ? false : true,
    });
  };

  const handleBicChange = bic => {
    setBic({
      text: bic,
      isEmpty: /^[0-9]{9}$/.test(bic),
    });
  };

  const handleCorrespChange = corresp => {
    setCorresp({
      text: corresp,
      isEmpty: /^[0-9]{20}$/.test(corresp),
    });
  };

  const handleCheckSendData = () => {
    if (
      name.isEmpty &&
      amount.isEmpty &&
      receiver.isEmpty &&
      accountNumber.isEmpty &&
      bank.isEmpty &&
      bic.isEmpty &&
      corresp.isEmpty
    ) {
      loadNewPayment({
        name: name.text,
        comment,
        date,
        status,
        amount: amount.text,
        receiver: receiver.text,
        accountNumber: accountNumber.text,
        bank: bank.text,
        bic: bic.text,
        corresp: corresp.text,
      });
    } else {
      setIsErrorEmpty(true);
    }
  };

  return (
    <AddNewPaymentForm>
      <AddNewPaymentHead>Новый платеж</AddNewPaymentHead>
      <AddNewPaymentInput
        required
        label="Наименование платежа"
        value={name.text}
        error={!name.isEmpty}
        helperText={
          isErrorEmpty && !name.isEmpty && 'Введите наименование платежа'
        }
        variant="outlined"
        margin="dense"
        onChange={event => handleNameChange(event.target.value)}
      />

      <AddNewPaymentInput
        multiline
        label="Комментарий"
        value={comment.text}
        rows="3"
        variant="outlined"
        margin="dense"
        onChange={event => setComment(event.target.value.slice(0, 200))}
      />

      <AddNewPaymentInputWrapper>
        <AddNewPaymentDate utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            cancelLabel="Отмена"
            okLabel="ОК"
            format="dd.MM.yyyy"
            invalidDateMessage="Неверный формат даты"
            minDateMessage="Неверная дата"
            disablePast="true"
            margin="normal"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </AddNewPaymentDate>
        <AddNewPaymentStatus
          value={status}
          onChange={event => setStatus(event.target.value)}
        >
          <MenuItem value="Создан">Создан</MenuItem>
          <MenuItem value="В работе">В работе</MenuItem>
          <MenuItem value="Платеж проведен">Платеж проведен</MenuItem>
        </AddNewPaymentStatus>
        <AddNewPaymentInputAmount
          required
          error={!amount.isEmpty}
          type="number"
          value={amount.text}
          helperText={
            isErrorEmpty && !amount.isEmpty && 'Введите сумму платежа'
          }
          label="Cумма"
          variant="outlined"
          margin="dense"
          onChange={event => handleChangeAmount(event.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">₽</InputAdornment>,
          }}
        />
      </AddNewPaymentInputWrapper>

      <AddNewPaymentInput
        required
        label="Получатель платежа"
        value={receiver.text}
        helperText={
          isErrorEmpty &&
          !receiver.isEmpty &&
          'Введите название получателя платежа'
        }
        error={!receiver.isEmpty}
        variant="outlined"
        margin="dense"
        onChange={event => handleReceiverChange(event.target.value)}
      />

      <AddNewPaymentInputAccountNumber
        required
        type="number"
        label="Номер счета получателя платежа"
        value={accountNumber.text}
        helperText={
          isErrorEmpty &&
          !accountNumber.isEmpty &&
          'Введите корректный номер счета'
        }
        error={!accountNumber.isEmpty}
        variant="outlined"
        margin="dense"
        onChange={event => handleAccountNumberChange(event.target.value)}
      />

      <AddNewPaymentInput
        required
        label="Банк получателя платежа"
        value={bank.text}
        helperText={
          isErrorEmpty && !bank.isEmpty && 'Введите наименование банка'
        }
        error={!bank.isEmpty}
        variant="outlined"
        margin="dense"
        onChange={event => handleBankChange(event.target.value)}
      />

      <AddNewPaymentInput
        required
        type="number"
        label="БИК банка"
        value={bic.text}
        helperText={
          isErrorEmpty && !bic.isEmpty && 'Введите корректный БИК банка'
        }
        error={!bic.isEmpty}
        variant="outlined"
        margin="dense"
        onChange={event => handleBicChange(event.target.value)}
      />

      <AddNewPaymentInput
        required
        type="number"
        label="Корр.счет банка"
        value={corresp.text}
        helperText={
          isErrorEmpty && !corresp.isEmpty && 'Введите корректный корр счет'
        }
        error={!corresp.isEmpty}
        variant="outlined"
        margin="dense"
        onChange={event => handleCorrespChange(event.target.value)}
      />

      <AddNewPaymentButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckSendData}
        >
          Создать
        </Button>
        <Button variant="contained" onClick={handleCancelPayment}>
          Отмена
        </Button>
      </AddNewPaymentButtonWrapper>
    </AddNewPaymentForm>
  );
};
