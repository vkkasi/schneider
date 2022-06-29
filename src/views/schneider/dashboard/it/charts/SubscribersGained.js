/* eslint-disable no-unused-expressions */
// ** Custom Components
import StatsWithAreaChart from './StatsWithAreaChart'

const SubscribersGained = ({ data }) => {
  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: [data.color],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  return data !== null ? (
    <StatsWithAreaChart
      icon={data.icon}
      color={data.color ? data.color : 'primary'}
      stats={data.title}
      statTitle={data.subTitle}
      series={data.series}
      type={data.type ? data.type : 'area'}
      options={options}
    />
  ) : null
}

export default SubscribersGained
