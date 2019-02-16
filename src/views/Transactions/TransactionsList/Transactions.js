import React, { Component } from 'react';
import { Card, FormGroup, Label, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



const mockTransactions = [
  {
    id: 0,
    source: 'Main',
    target: 'Party fund',
    type: 'TRANSFER',
    amount: 50,
    description: 'Sending cash',
    date: (new Date()).toDateString(),
    status: 'Complete',
    category: '',
  },
  {
    id: 1,
    source: 'Main',
    target: 'Party fund',
    type: 'TRANSFER',
    amount: 50,
    description: 'Time to partey',
    date: (new Date()).toDateString(),
    status: 'Pending',
    category: '',
  },
  {
    id: 2,
    source: 'Partey fund',
    target: 'Main',
    type: 'TRANSFER',
    amount: 100,
    description: 'No more partey',
    date: (new Date()).toDateString(),
    status: 'Complete',
    category: 'Partey',
  },
  {
    id: 3,
    source: 'Main',
    target: 'House fund',
    type: 'TRANSFER',
    amount: 999,
    description: 'Sending cash',
    date: (new Date()).toDateString(),
    status: 'Complete',
    category: 'Somee cateogry',
  },
];

class Transactions extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
        <Col xs="12" lg="4">
              <FormGroup>
                      <Label htmlFor="search">Search</Label>
                      <Input type="text" name="search" id="search" />
                    </FormGroup>
                    </Col>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Transaction History
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Source Account</th>
                      <th>Target Account</th>
                      <th>Transaction Type</th>
                      <th>Amount</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Transaction Status</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTransactions.map(t => {
                      return (
                        <tr>
                          <td>{t.source}</td>
                          <td>{t.target}</td>
                          <td>{t.type}</td>
                          <td>{t.amount}</td>
                          <td>{t.description}</td>
                          <td>{t.date}</td>
                          <td>{t.status}</td>
                          <td>{t.category}</td>
                        </tr>
                      )
                    })}
                  </tbody>


                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transactions;
