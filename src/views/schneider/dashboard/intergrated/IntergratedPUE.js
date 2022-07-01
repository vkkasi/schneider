import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col
} from 'reactstrap'
import { Settings } from 'react-feather'

import Chart from 'react-apexcharts'

const SupportTracker = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/support-tracker').then(res => setData(res.data))
  }, [])

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: 'Montserrat',
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              fontFamily: 'Montserrat',
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      }
    },
    series = [47]

  return data !== null ? (
    <Card>
      <CardHeader className='pb-0'>
        <div></div>
        <CardTitle tag='h4'>통합 PUE</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={props.height} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='box-pue-text d-flex justify-content-center mt-1'>
          <div className='text-center bg-smarty-green'>
            <span className='font-large-1 font-weight-bold'>1.5</span>
          </div>
          <div className='text-center bg-smarty-blue'>
            <span className='font-large-1 font-weight-bold'>1.7</span>
          </div>
          <div className='text-center bg-smarty-red'>
            <span className='font-large-1 font-weight-bold'>2.0</span>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : null
}
export default SupportTracker
