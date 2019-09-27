import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import 'typeface-roboto';

class InfoCard extends Component {
  handleClickOutside = () => {
    this.props.handleOpenInfo();
  };

  render() {
    const { infoCard } = this.props;
    return (
      <Card>
        <Typography variant="h5">Карточка платежа</Typography>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell align="left">Название: </TableCell>
              <TableCell align="center">{infoCard.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Сумма: </TableCell>
              <TableCell align="center">{infoCard.amount} руб.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Дата: </TableCell>
              <TableCell align="center">{infoCard.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Статус: </TableCell>
              <TableCell align="center">{infoCard.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Комментарий: </TableCell>
              <TableCell align="center">{infoCard.comment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Получатель: </TableCell>
              <TableCell align="center">{infoCard.details.receiver}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Номер счета: </TableCell>
              <TableCell align="center">
                {infoCard.details.accountNumber}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Банк: </TableCell>
              <TableCell align="center">{infoCard.details.bank}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">БИК банка: </TableCell>
              <TableCell align="center">{infoCard.details.bic}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Корр счет: </TableCell>
              <TableCell align="center">{infoCard.details.corresp}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}

export default onClickOutside(InfoCard);

const Card = styled(Box)({
  height: 'auto',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1vh',
  backgroundColor: '#fff',
  padding: '20px',
  zIndex: 1,
});
