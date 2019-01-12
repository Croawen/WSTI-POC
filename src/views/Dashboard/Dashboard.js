import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

function getLabels(amount, month) {
  var labels = [];
  for(var i = 0; i < amount; ++i) {
    labels.push(month + " " + i.toString());
  }

  return labels;
}

function getNumericData(amount, min, max)
{
  var data = [];
  for(var i = 0; i < amount; ++i) {
    data.push(Math.floor(Math.random() * max) + min);
  }

  return data;
}

const chartSpentThisMonth = {
  labels: getLabels(30, "January"),
  datasets: [
    {
      label: 'Spent overall',
      backgroundColor: 'rgba(255,255,255,.55)',
      borderColor: 'rgba(255,255,255,.55)',
      data: getNumericData(30, 0, 50),
    },
  ],
};

const chartSpentThisMonthEntertaiment = {
  labels: getLabels(30, "January"),
  datasets: [
    {
      label: 'Spent on entertaiment',
      backgroundColor: 'rgba(255,255,255,.55)',
      borderColor: 'rgba(255,255,255,.55)',
      data: getNumericData(30, 0, 25),
    },
  ],
};

const chartSpentThisMonthOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          // Using same options for multiple charts, so don't use too much different min and max values
          min: Math.min.apply(Math, chartSpentThisMonth.datasets[0].data) - 5,
          max: Math.max.apply(Math, chartSpentThisMonth.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">$423</div>
                <div>spent this month</div>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={chartSpentThisMonth} options={chartSpentThisMonthOpts} height={70} />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">$120</div>
                <div>spent on entertainment</div>
                <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={chartSpentThisMonthEntertaiment} options={chartSpentThisMonthOpts} height={70} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
