import React, { useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'date-fns';
import 'typeface-roboto';
import {
  Wrapper,
  ExitIcon,
  CardInfoWrapper,
  FilterStatus,
  FilterWrapperDate,
  FilterLabelText,
  FilterWrapperAmount,
  FilterTextSeparator,
  WrapperSearch,
  AddNewPaymentWrapper,
  Header,
  TextHeaderName,
  TextHeaderBalance,
  PaperList,
  ControlPanel,
  NewPayment,
  Row
} from './common/styles'

import AddNewPayment from '../AddNewPayment/AddNewPaymentContainer';
import SearchList from '../SearchList/SearchListContainer';
import InfoCard from '../InfoCard';

export const Payments = ({
  email,
  balance,
  isOpenInfo,
  infoCard,
  isOpenSearch,
  filterAmount,
  filterDate,
  filterStatus,
  paylist,
  isOpenNew,
  sortList,

  loadState, 
  handleUserExit, 
  handleCancelPayment, 
  handleChangeSearch,
  handleOpenInfo,
  handleNewPayment,
  handleSortDirection,
  handleChangeFilterAmountMin,
  handleChangeFilterAmountMax,
  handleChangeFilterStatus,
  handleChangeFilterDateMin,
  handleChangeFilterDateMax,
  handleCloseInfo
}) => {
  

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`${userId}/`)
      .once('value')
      .then(function(obj) {
        const data = Object.values(obj.val().paylist).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        const arrAmount = data.map(item => item.amount).sort((a, b) => a - b);
        const arrDate = data
          .map(item => item.date)
          .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        loadState({
          email: obj.val().email,
          balance: obj.val().balance,
          paylist: data,
          arrAmount,
          arrDate,
        });
      });
  },[loadState]);

  const load = () => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`${userId}/`)
      .once('value')
      .then(function(obj) {
        const data = Object.values(obj.val().paylist).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        const arrAmount = data.map(item => item.amount).sort((a, b) => a - b);
        const arrDate = data
          .map(item => item.date)
          .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        loadState({
          email: obj.val().email,
          balance: obj.val().balance,
          paylist: data,
          arrAmount,
          arrDate,
        });
      });
  };

  const handleUserExitButton = () => {
    firebase.auth().signOut();
    handleUserExit();
  };

  const loadNewPayment = item => {
    handleCancelPayment();
    const paymentData = {
      id: paylist.length + 1,
      name: item.name,
      comment: item.comment,
      date: item.date,
      status: item.status,
      amount: item.amount,
      details: {
        receiver: item.receiver,
        accountNumber: item.accountNumber,
        bank: item.bank,
        bic: item.bic,
        corresp: item.corresp,
      },
    };
    const newBalance = balance - item.amount;

    firebase
      .database()
      .ref(firebase.auth().currentUser.uid)
      .child('paylist')
      .push(paymentData);

    firebase
      .database()
      .ref(firebase.auth().currentUser.uid + '/balance')
      .set(newBalance);

    load();
  };


    const list = paylist
      .filter(
        item =>
          item.amount >= filterAmount.min && item.amount <= filterAmount.max,
      )
      .filter(
        item =>
          new Date(item.date).getTime() >= new Date(filterDate.min).getTime() &&
          new Date(item.date).getTime() <= new Date(filterDate.max).getTime(),
      )
      .filter(item =>
        filterStatus === 'Показать все' ? item : item.status === filterStatus,
      )
      .map((item, key) => (
        <Row key={key} onClick={() => handleOpenInfo({id: item.id, paylist})}>
          <TableCell align="left">{item.name}</TableCell>
          <TableCell align="center">{item.amount}</TableCell>
          <TableCell align="center">{item.date}</TableCell>
          <TableCell align="center">{item.status}</TableCell>
          <TableCell align="center">{item.details.receiver}</TableCell>
        </Row>
      ));

    return (
      <Wrapper>
        <Header>
          <TextHeaderName>{email}</TextHeaderName>
          <TextHeaderBalance>Ваш баланc: {balance} руб.</TextHeaderBalance>
          <ExitIcon color="primary" onClick={handleUserExitButton} />
        </Header>
        <ControlPanel>
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
              onChange={event =>
                handleChangeFilterAmountMin(event.target.value)
              }
            />
            <FilterTextSeparator>-</FilterTextSeparator>
            <TextField
              value={filterAmount.max}
              onChange={event =>
                handleChangeFilterAmountMax(event.target.value)
              }
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
              onChange={event =>
                handleChangeSearch({text: event.target.value.toLowerCase(), paylist})
              }
            />
          </WrapperSearch>
        </ControlPanel>
        <PaperList>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                {sortList.map((row, key) => (
                  <TableCell align="center" key={key}>
                    {row.name}
                    <TableSortLabel
                      onClick={() => handleSortDirection({key, paylist, sortList})}
                      direction={row.direction ? 'asc' : 'desc'}
                      active={true}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{list}</TableBody>
          </Table>
        </PaperList>
        {isOpenInfo && (
          <CardInfoWrapper>
            <InfoCard infoCard={infoCard} handleCloseInfo={handleCloseInfo} />
          </CardInfoWrapper>
        )}
        {isOpenSearch && <SearchList />}
        {isOpenNew && (
          <AddNewPaymentWrapper>
            <AddNewPayment loadNewPayment={loadNewPayment} />
          </AddNewPaymentWrapper>
        )}
      </Wrapper>
    );
  };