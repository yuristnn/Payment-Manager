// import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
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
  handleOpenInfo,
  handleSortDirection,
  handleLoadNewPayment,
}) => {
  useEffect(() => {
    loadState();
  }, [loadState]);

  const loadNewPayment = value => {
    const id = paylist.length + 1;
    const { name, comment, date, status, amount } = value;
    const details = {
      receiver: value.receiver,
      accountNumber: value.accountNumber,
      bank: value.bank,
      bic: value.bic,
      corresp: value.corresp,
    };
    const newBalance = balance - value.amount;
    handleLoadNewPayment({
      id,
      name,
      comment,
      date,
      status,
      amount,
      details,
      balance: newBalance,
    });
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

// Payments.propTypes = {
//   balance: PropTypes.number,
//   isOpenInfo: PropTypes.bool,
//   isOpenSearch: PropTypes.bool,
//   filterAmount: PropTypes.shape({
//     arrAmount: PropTypes.array,
//     min: PropTypes.number,
//     max: PropTypes.number
//   }),
//   filterDate: PropTypes.shape({
//     arrDate: PropTypes.array,
//     min: PropTypes.string,
//     max: PropTypes.string,
//   }),
//   filterStatus: PropTypes.string,
//   paylist: PropTypes.array,
//   isOpenNew: PropTypes.bool,
//   sortList: PropTypes.array,
//   loadState: PropTypes.func,
//   handleOpenInfo: PropTypes.func,
//   handleSortDirection: PropTypes.func,
//   handleLoadNewPayment: PropTypes.func,
// };
