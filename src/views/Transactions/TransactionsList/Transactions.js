import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


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
];

class Transactions extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
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
