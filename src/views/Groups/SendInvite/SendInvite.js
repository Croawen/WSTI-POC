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

class SendInvite extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Account</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="group">Group</Label>
                      <Input type="select" name="group" id="group">
                        <option value="0">Fancy group name</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="8" sm="8">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" name="email" id="email" />
                    </FormGroup>
                  </Col>
                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Send invite</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default SendInvite;
