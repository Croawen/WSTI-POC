import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const mockAccounts = [
  {
    name: 'Main',
    group: '',
    category: '',
    currency: 'USD',
    ballance: 5476.10,
  },
  {
    name: 'House stuff',
    group: 'house',
    category: 'living expenses',
    currency: 'USD',
    ballance: 290.06,
  },
  {
    name: 'Party fund',
    group: '',
    category: 'entertainment',
    currency: 'USD',
    ballance: -135.50,
  },
];

class Accounts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Your accounts
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Group</th>
                      <th>Category</th>
                      <th>Currency</th>
                      <th>Ballance</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAccounts.map(acc => {
                      return (
                        <tr>
                          <td>{acc.name}</td>
                          <td>{acc.group}</td>
                          <td>{acc.category}</td>
                          <td>{acc.currency}</td>
                          <td>{acc.ballance}</td>
                          <td>
                          <Link to={`/accounts/${acc.id}`}>
                            <Badge color="success">Edit</Badge>
                          </Link>
                          </td>
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

export default Accounts;
