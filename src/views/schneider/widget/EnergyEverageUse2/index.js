/* eslint-disable object-shorthand */
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody, Row, Col, ButtonGroup, Button, TabContent, TabPane } from 'reactstrap'
import { Settings } from 'react-feather'

const EnerginEverageUse2 = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        // distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
	colors: ['#017dba', '#ae2f41'],
	stroke: {
		show: true,
		width: 3,
		colors: ['transparent']
	},
    xaxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    },
    yaxis: {
      title: {
        text: '빈도'
      }
    },
    fill: {
      opacity: 1,
	//   colors: ['#017dba', '#ae2f41']
    },
	
  }

	const series = [
		{
			name: 'Sag',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		},
		{
			name: 'Swell',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}
	]

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>시간당 Voltage Sag/Swell 발생빈도</CardTitle>
          
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          {/* <div className='d-flex justify-content-end'>
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
          </div> */}
          <div className='box-chart'>
            <Chart options={options} series={series} type='bar' height={250} />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default EnerginEverageUse2