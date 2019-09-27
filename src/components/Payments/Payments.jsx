import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
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

import AddNewPayment from '../AddNewPayment/AddNewPaymentContainer';
import SearchList from '../SearchList/SearchListContainer';
import InfoCard from '../InfoCard';

class Payments extends Component {
  load = () => {
    const userId = firebase.auth().currentUser.uid;
    const { loadState } = this.props;
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

  componentDidMount = () => {
    this.load();
  };

  handleUserExitButton = () => {
    firebase.auth().signOut();
    this.props.handleUserExit();
  };

  loadNewPayment = item => {
    this.props.handleCancelPayment();
    const paymentData = {
      id: this.props.paylist.length + 1,
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
    const newBalance = this.props.balance - item.amount;

    firebase
      .database()
      .ref(firebase.auth().currentUser.uid)
      .child('paylist')
      .push(paymentData);

    firebase
      .database()
      .ref(firebase.auth().currentUser.uid + '/balance')
      .set(newBalance);

    this.load();
  };

  render() {
    const {
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

      handleChangeSearch,
      handleOpenInfo,
      handleNewPayment,
      handleSortDirection,
      handleChangeFilterAmountMin,
      handleChangeFilterAmountMax,
      handleChangeFilterStatus,
      handleChangeFilterDateMin,
      handleChangeFilterDateMax,
    } = this.props;

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
        <Row key={key} onClick={() => handleOpenInfo(item.id)}>
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
          <ExitIcon color="primary" onClick={this.handleUserExitButton} />
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
                handleChangeSearch(event.target.value.toLowerCase())
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
                      onClick={() => handleSortDirection(key)}
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
            <InfoCard infoCard={infoCard} handleOpenInfo={handleOpenInfo} />
          </CardInfoWrapper>
        )}
        {isOpenSearch && <SearchList />}
        {isOpenNew && (
          <AddNewPaymentWrapper>
            <AddNewPayment loadNewPayment={this.loadNewPayment} />
          </AddNewPaymentWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Payments;

const Wrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #d0d4ed, #3f51b5)',
});

const ExitIcon = styled(ExitToAppRoundedIcon)({
  marginRight: '3vh',
  cursor: 'pointer',
});

const CardInfoWrapper = styled(Box)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7);',
  zIndex: 1,
});

const FilterStatus = styled(Select)({
  width: '15%',
  marginRight: 10,
});

const FilterWrapperDate = styled(Box)({
  width: '28%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 20,
  height: '100%',
});

const FilterLabelText = styled(Typography)({
  marginRight: 5,
});

const FilterWrapperAmount = styled(Box)({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 20,
  height: '100%',
});

const FilterTextSeparator = styled(Typography)({
  margin: 5,
});

const WrapperSearch = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  width: '15%',
  height: '100%',
  borderRadius: 0,
  boxShadow: 'none',
  marginRight: 20,
});

const AddNewPaymentWrapper = styled(Box)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7);',
  zIndex: 1,
});

const Header = styled(Box)({
  height: '7%',
  width: '90%',
  display: 'flex',
  marginTop: '2vh',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '1vh',
});

const TextHeaderName = styled(Typography)({
  fontSize: '100%',
  fontWeight: 'bold',
  marginLeft: '3vh',
});

const TextHeaderBalance = styled(Typography)({
  fontSize: '100%',
  fontWeight: 'bold',
  color: '#12c329',
});

const PaperList = styled(Paper)({
  height: '90%',
  width: '90%',
  marginTop: '2vh',
  marginBottom: '3vh',
  background: '#fff',
  borderRadius: '1vh',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#ced2ec',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

const ControlPanel = styled(Box)({
  height: '7%',
  width: '90%',
  display: 'flex',
  marginTop: '2vh',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '1vh',
});

const NewPayment = styled(Fab)({
  height: '8vh',
  width: '8vh',
  position: 'absolute',
  left: '3%',
});

const Row = styled(TableRow)({
  cursor: 'pointer',
  '&:hover,:focus': {
    backgroundColor: '#ced2ec',
  },
});
