import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

const mockGroups = [
  {
    id: '0',
    name: 'Fancy group name',
    accounts: ['test@gmail.com', 'mail@gmail.com', 'superyahoo@yahoo.com'],
    dateCreated: (new Date()).toDateString(),
  },
];

class Groups extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Your groups
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Users in group</th>
                      <th>Creation Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockGroups.map(g => {
                      return (
                        <tr>
                          <td>{g.name}</td>
                          <td>{g.accounts.map(acc => { return (<span key={acc}>{`${acc} `}</span>)})}</td>
                          <td>{g.dateCreated}</td>
                          <td>
                          <Link to={`/groups/${g.id}`}>
                            <Badge color="success">Edit</Badge>
                          </Link>
                          <Link to={`/groups/${g.id}/leave`}>
                            <Badge color="danger">Leave</Badge>
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

export default Groups;
