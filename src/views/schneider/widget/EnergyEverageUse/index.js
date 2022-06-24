import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody, Row, Col, ButtonGroup, Button, TabContent, TabPane } from 'reactstrap'
import { Settings } from 'react-feather'

const EnerginEverageUse = () => {
  const [activeTab, setActiveTab] = useState('power')
  const [chartOptionYaxisTitleText, SetChartOptionYaxisTitleText] = useState('kWh')
  const [chartSeries, setChartSeries] = useState([900, 1200, 550, 1000, 800, 750])

  const colors = ['#017dba', '#6c3aa5', '#6c3aa5', '#6c3aa5', '#6c3aa5', '#459c4d']

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: colors,
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: ['오늘', '일간 평균', '월간 평균', '연간 평균', '통합 평균', 'ECO 기준']
    },
    yaxis: {
      title: {
        text: chartOptionYaxisTitleText
      }
    },
    fill: {
      opacity: 1
    }
  }

  const series = [
    {
      data: chartSeries
    }
  ]

  const onClickActiveTab = (id) => {
    switch (id) {
      case 'power':
        SetChartOptionYaxisTitleText('kWh')
        setChartSeries([900, 1200, 550, 1000, 800, 750])
        break

      case 'water':
        SetChartOptionYaxisTitleText('㎥')
        setChartSeries([23, 345, 12, 789, 12, 56])
        break

      case 'gas':
        SetChartOptionYaxisTitleText('㎥')
        setChartSeries([538, 453, 3858, 745, 387, 854])
        break
    }

    setActiveTab(id)
  }

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>Energy 평균 사용량</CardTitle>
          
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='d-flex justify-content-end'>
            <ButtonGroup className='mt-md-0 mt-1'>
              <Button active={activeTab === 'power'} color='primary' size='sm' outline onClick={() => onClickActiveTab('power')} >
                전기
              </Button>
              <Button active={activeTab === 'water'} color='info' size='sm' outline onClick={() => onClickActiveTab('water')}>
                물
              </Button>
              <Button active={activeTab === 'gas'} color='success' size='sm' outline onClick={() => onClickActiveTab('gas')}>
                가스
              </Button>
            </ButtonGroup>
          </div>
          <div className='box-chart'>
            <Chart options={options} series={series} type='bar' height={210} />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default EnerginEverageUse