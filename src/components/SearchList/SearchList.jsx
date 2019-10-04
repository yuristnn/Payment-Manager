import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import 'typeface-roboto';
import {
  TableSearchWrapper,
  Cell,
  TextNoResult
} from './common/styles'

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


