import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

const accountDetails = {
  name: 'Party fund',
  category: 0,
  group: 0,
}

class EditAccount extends Component {
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
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" value={accountDetails.name} placeholder="Enter account name" />
                </FormGroup>

                <FormGroup row className="my-0">
                  <Col xs="4" sm="4">
                    <FormGroup>
                      <Label htmlFor="category">Category</Label>
                      <Input type="select" name="category" id="category">
                        <option value="0" selected>house expenses</option>
                        <option value="1">entertainment</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="8" sm="8">
                    <FormGroup>
                      <Label htmlFor="group">Group</Label>
                      <Input type="select" name="group" id="group">
                        <option value="0" selected>Fancy group name</option>
                      </Input>
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
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Save</Button>
                <Button type="submit" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default EditAccount;
