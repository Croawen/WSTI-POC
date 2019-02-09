import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class NewTransaction extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Transfer between your own accounts</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="from">From</Label>
                      <Input type="select" name="from" id="from">
                        <option value="0">Main</option>
                        <option value="1">Party fund</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="amount">Amount</Label>
                      <Input type="number" value="0" name="amount" id="amount" />
                    </FormGroup>
                  </Col>
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="to">To</Label>
                      <Input type="select" name="to" id="to">
                      <option value="0">Main</option>
                        <option value="1">Party fund</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Send</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Transfer to someone's account</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="from2">From</Label>
                      <Input type="select" name="from2" id="from2">
                        <option value="0">Main</option>
                        <option value="1">Party fund</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="amount2">Amount</Label>
                      <Input type="number" value="0" name="amount2" id="amount2" />
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className="my-0">
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="group">Select group</Label>
                      <Input type="select" name="group" id="group">
                        <option value="0">Fancy group name</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="6" sm="6">
                  <FormGroup>
                      <Label htmlFor="account">Select account</Label>
                      <Input type="select" name="account" id="account">
                        <option value="0">Main</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Send</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default NewTransaction;
