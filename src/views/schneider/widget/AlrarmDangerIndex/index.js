/* eslint-disable object-shorthand */
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

import { Card, CardHeader, CardTitle, CardBody, Row, Col, ButtonGroup, Button, TabContent, TabPane } from 'reactstrap'
import { Settings } from 'react-feather'

const AlarmState = () => {
  const colors = ['#ea5455', '#ff9f43', '#ffc107', '#28c76f']

  const options = {
    chart: {
      height: 250,
      type: 'radialBar',
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false
      },
      offsetY: -30
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    colors :  ['lightgreen'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['red'],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    labels: ['Percent']
  }

  const series = [100]

  return (
    <>
      <Card className='card-green-kpis'>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>알람 위험 지수</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <Row>
			      <Col className='col-5'>
              <div className='box-chart'>
                <Chart options={options} series={series} type='radialBar' height={250} />
              </div>
            </Col>
            <Col>
              <div className='circle-indicator'>
                <div className='circle'>
                  <div className='value bg-smarty-red' style={{ marginTop: '-20%' }}></div>
                  <span className='title'>위험</span>
                </div>
                <div className='circle'>
                  <div className='value bg-smarty-orange' style={{ marginTop: '-40%' }}></div>
                  <span className='title'>경고</span>
                </div>
                <div className='circle'>
                  <div className='value bg-smarty-green' style={{ marginTop: '-60%' }}></div>
                  <span className='title'>주의</span>
                </div>
                <div className='circle'>
                  <div className='value bg-smarty-blue' style={{ marginTop: '-80%' }}></div>
                  <span className='title'>정보</span>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}

export default AlarmState