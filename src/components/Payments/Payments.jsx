import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'date-fns';
import 'typeface-roboto';
import {
  Wrapper,
  CardInfoWrapper,
  AddNewPaymentWrapper,
  PaperList,
  Row,
} from './common/styles';

import AddNewPayment from './AddNewPayment/AddNewPaymentContainer';
import SearchList from './SearchList/SearchListContainer';
import InfoCard from './InfoCard/InfoCardContainer';
import Header from './Header/HeaderContainer';
import ControlPanel from './ControlPanel/ControlPanelContainer';

export const Payments = ({
  balance,
  isOpenInfo,
  isOpenSearch,
  filterAmount,
  filterDate,
  filterStatus,
  paylist,
  isOpenNew,
  sortList,

  loadState,
  handleCancelPayment,
  handleOpenInfo,
  handleSortDirection,
}) => {
  useEffect(() => {
    loadState();
  }, [loadState]);

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

    loadState();
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
      <Row key={key} onClick={() => handleOpenInfo({ id: item.id, paylist })}>
        <TableCell align="left">{item.name}</TableCell>
        <TableCell align="center">{item.amount}</TableCell>
        <TableCell align="center">{item.date}</TableCell>
        <TableCell align="center">{item.status}</TableCell>
        <TableCell align="center">{item.details.receiver}</TableCell>
      </Row>
    ));

  return (
    <Wrapper>
      <Header />
      <ControlPanel />
      <PaperList>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {sortList.map((row, key) => (
                <TableCell align="center" key={key}>
                  {row.name}
                  <TableSortLabel
                    onClick={() =>
                      handleSortDirection({ key, paylist, sortList })
                    }
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
          <InfoCard />
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
