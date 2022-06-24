import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'


const ColumnStacked100 = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false
      }

    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },
    tooltip: {
      y: {
        formatter (val) {
          return `${val}K`
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetX: 20
    }
  }

  const series = [
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4]
    },
    {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10]
    }
  ]


  return (
    <>
      <Card>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>BUILDING LOAD</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <Chart options={options} series={series} type='bar' height={350} />
        </CardBody>
      </Card>
    </>
  )
}

export default ColumnStacked100
