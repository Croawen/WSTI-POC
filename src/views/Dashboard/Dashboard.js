import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
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
    data.push(Math.floor(Math.random() * (max - min)) + min);
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

/* Main Chart */ 
const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'Main account',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: getNumericData(30, -20, 100),
    },
    {
      label: 'House stuff',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: getNumericData(30, 150, 200),
    },
    {
      label: 'Party fund',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: getNumericData(30, 50, 150),
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

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
    category: 'Some cateogry',
  },
];

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

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Account's balance</CardTitle>
                    <div className="small text-muted">January 2019</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Today's history
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
