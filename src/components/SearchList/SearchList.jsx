import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';

class SearchList extends Component {
  handleClickOutside = () => {
    this.props.handleChooseSearch();
  };

  render() {
    const { search } = this.props;
    return (
      <TableSearchWrapper>
        {search.length !== 0 ? (
          <Table size="small">
            <TableBody>
              {search.map((item, key) => (
                <TableRow key={key}>
                  <Cell align="left">{item.name}</Cell>
                  <Cell align="center">{item.amount}</Cell>
                  <Cell align="center">{item.date}</Cell>
                  <Cell align="center">{item.status}</Cell>
                  <Cell align="center">{item.details.receiver}</Cell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <TextNoResult>Нет результатов</TextNoResult>
        )}
      </TableSearchWrapper>
    );
  }
}

export default onClickOutside(SearchList);

const TableSearchWrapper = styled(Paper)({
  position: 'absolute',
  backgroundColor: '#4052b5',
  zIndex: 2,
  top: '18%',
  width: '80%',
  color: '#fff',
  borderRadius: '1vh',
  overflowY: 'auto',
  height: '40%',
  boxShadow: '0 0 10px rgba(0,0,0,0.8)',
  padding: 5,
  display: 'flex',
  justifyContent: 'center',
  '&::-webkit-scrollbar': {
    width: 16,
    borderRadius: 8,
    backgroundColor: '4052b5',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    backgroundColor: '#ced2ec',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 8,
    backgroundColor: '4052b5',
  },
});

const Cell = styled(TableCell)({
  color: '#fff',
});

const TextNoResult = styled(Typography)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
