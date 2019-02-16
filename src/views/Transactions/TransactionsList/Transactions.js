import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, FormGroup, Label, Input, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';



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
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Filters</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="2" sm="2">
                    <FormGroup>
                      <Label htmlFor="category">Source account</Label>
                      <Input type="text" name="category" id="category" />
                    </FormGroup>
                  </Col>
                  <Col xs="2" sm="2">
                  <FormGroup>
                      <Label htmlFor="category">Target account</Label>
                      <Input type="text" name="category" id="category" />
                    </FormGroup>
                  </Col>
                  <Col xs="2" sm="2">
                    <FormGroup>
                      <Label htmlFor="group">Amount from</Label>
                      <Input type="number" name="group" id="group" />
                    </FormGroup>
                  </Col>
                  <Col xs="2" sm="2">
                    <FormGroup>
                      <Label htmlFor="group">Amount to</Label>
                      <Input type="number" name="group" id="group" />
                    </FormGroup>
                  </Col>
                  <Col xs="2" sm="2">
                    <FormGroup>
                      <Label htmlFor="group">Date from</Label>
                      <Input type="date" name="group" id="group" />
                    </FormGroup>
                  </Col>
                  <Col xs="2" sm="2">
                    <FormGroup>
                      <Label htmlFor="group">Date from</Label>
                      <Input type="date" name="group" id="group" />
                    </FormGroup>
                  </Col>
                </FormGroup>

                {/* <FormGroup row className="my-0">
                  <Col xs="8" sm="4">
                    <FormGroup>
                      <Label htmlFor="currency">Currency</Label>
                      <Input type="select" name="select" id="currency" >
                        <option value="0">USD</option>
                        <option value="1">EUR</option>
                        <option value="2">PLN</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="initial-balance">Initial balance</Label>
                      <Input type="number" id="initial-balance" placeholder="0" />
                    </FormGroup>
                  </Col>
                </FormGroup> */}

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Filter</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

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
