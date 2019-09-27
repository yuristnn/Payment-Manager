import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import 'date-fns';

class AddNewPayment extends Component {
  state = {
    name: { text: '', isEmpty: false },
    comment: '',
    date: new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 10),
    status: 'Создан',
    amount: { text: '', isEmpty: false },
    receiver: { text: '', isEmpty: false },
    accountNumber: { text: '', isEmpty: false },
    bank: { text: '', isEmpty: false },
    bic: { text: '', isEmpty: false },
    corresp: { text: '', isEmpty: false },
  };

  handleNameChange = name => {
    this.setState(() => ({
      ...this.state,
      name: {
        ...this.state.name,
        text: name.slice(0, 50),
        isEmpty: name === '' ? false : true,
      },
    }));
  };

  handleCommentChange = comment => {
    this.setState(() => ({ ...this.state, comment: comment.slice(0, 200) }));
  };

  handleDateChange = date => {
    this.setState(() => ({
      ...this.state,
      date: new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10),
    }));
  };

  handleChangeStatus = status => {
    this.setState(() => ({ ...this.state, status }));
  };

  handleChangeAmount = amount => {
    this.setState(() => ({
      ...this.state,
      amount: {
        ...this.state.amount,
        text: Math.abs(+amount) === 0 ? '' : Math.abs((+amount).toFixed(2)),
        isEmpty:
          amount > this.props.balance || amount === '' || amount < 0
            ? false
            : true,
      },
    }));
  };

  handleReceiverChange = receiver => {
    this.setState(() => ({
      ...this.state,
      receiver: {
        ...this.state.receiver,
        text: receiver.slice(0, 100),
        isEmpty: receiver === '' ? false : true,
      },
    }));
  };

  handleAccountNumberChange = accountNumber => {
    this.setState(() => ({
      ...this.state,
      accountNumber: {
        ...this.state.accountNumber,
        text: accountNumber,
        isEmpty: /^[0-9]{20}$/.test(accountNumber),
      },
    }));
  };

  handleBankChange = bank => {
    this.setState(() => ({
      ...this.state,
      bank: {
        ...this.state.bank,
        text: bank.toUpperCase().slice(0, 100),
        isEmpty: bank === '' ? false : true,
      },
    }));
  };

  handleBicChange = bic => {
    this.setState(() => ({
      ...this.state,
      bic: {
        ...this.state.bic,
        text: bic,
        isEmpty: /^[0-9]{9}$/.test(bic),
      },
    }));
  };

  handleCorrespChange = corresp => {
    this.setState(() => ({
      ...this.state,
      corresp: {
        ...this.state.corresp,
        text: corresp,
        isEmpty: /^[0-9]{20}$/.test(corresp),
      },
    }));
  };

  render() {
    const { loadNewPayment, handleCancelPayment } = this.props;

    const {
      name,
      comment,
      status,
      amount,
      date,
      receiver,
      accountNumber,
      bank,
      bic,
      corresp,
    } = this.state;

    return (
      <AddNewPaymentForm>
        <AddNewPaymentHead>Новый платеж</AddNewPaymentHead>

        <AddNewPaymentInput
          required
          label="Наименование платежа"
          value={name.text}
          error={!name.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleNameChange(event.target.value)}
        />

        <AddNewPaymentInput
          multiline
          label="Комментарий"
          value={comment.text}
          rows="3"
          variant="outlined"
          margin="dense"
          onChange={event => this.handleCommentChange(event.target.value)}
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
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </AddNewPaymentDate>
          <AddNewPaymentStatus
            value={status}
            onChange={event => this.handleChangeStatus(event.target.value)}
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
            label="Cумма"
            variant="outlined"
            margin="dense"
            onChange={event => this.handleChangeAmount(event.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">₽</InputAdornment>,
            }}
          />
        </AddNewPaymentInputWrapper>

        <AddNewPaymentInput
          required
          label="Получатель платежа"
          value={receiver.text}
          error={!receiver.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleReceiverChange(event.target.value)}
        />

        <AddNewPaymentInputAccountNumber
          required
          type="number"
          label="Номер счета получателя платежа"
          value={accountNumber.text}
          error={!accountNumber.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleAccountNumberChange(event.target.value)}
        />

        <AddNewPaymentInput
          required
          label="Банк получателя платежа"
          value={bank.text}
          error={!bank.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleBankChange(event.target.value)}
        />

        <AddNewPaymentInput
          required
          type="number"
          label="БИК банка"
          value={bic.text}
          error={!bic.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleBicChange(event.target.value)}
        />

        <AddNewPaymentInput
          required
          type="number"
          label="Корр.счет банка"
          value={corresp.text}
          error={!corresp.isEmpty}
          variant="outlined"
          margin="dense"
          onChange={event => this.handleCorrespChange(event.target.value)}
        />

        <AddNewPaymentButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={
              name.isEmpty &&
              amount.isEmpty &&
              receiver.isEmpty &&
              accountNumber.isEmpty &&
              bank.isEmpty &&
              bic.isEmpty &&
              corresp.isEmpty
                ? () =>
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
                    })
                : null
            }
          >
            Создать
          </Button>
          <Button variant="contained" onClick={() => handleCancelPayment()}>
            Отмена
          </Button>
        </AddNewPaymentButtonWrapper>
      </AddNewPaymentForm>
    );
  }
}

export default AddNewPayment;

const AddNewPaymentForm = styled(Box)({
  height: 'auto',
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1vh',
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 1,
});

const AddNewPaymentHead = styled(Typography)({
  fontSize: '3vh',
});

const AddNewPaymentInput = styled(TextField)({
  width: '100%',
  marginBottom: '0.5vh',
});

const AddNewPaymentInputAmount = styled(TextField)({
  width: '35%',
});

const AddNewPaymentInputWrapper = styled(Box)({
  height: 70,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginTop: '0.5vh',
});

const AddNewPaymentButtonWrapper = styled(Box)({
  width: '35%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});

const AddNewPaymentStatus = styled(Select)({
  width: '30%',
  margin: '0 20px',
});

const AddNewPaymentDate = styled(MuiPickersUtilsProvider)({
  width: '30%',
});

const AddNewPaymentInputAccountNumber = styled(TextField)({
  width: '100%',
  marginBottom: '0.5vh',
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '&::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
});
