/* eslint-disable object-shorthand */
import { useState } from 'react'
import Chart from 'react-apexcharts'


const ReportForm = () => {
  const options = {
    chart: {
      height: 300,
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
    colors: ['#00cfe8'],
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: ['UPS', 'RPDU', 'EMS'],
      labels: {
        style: {
          colors: '#000000',
          fontSize: '1rem'
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      max: 12
    }
  }

  const series = [
    {
      data: [8, 10, 1]
    }
  ]

  return (
    <div className='report-form'>
      <h1>펌웨어 분석</h1>
      <p>물리적 인프라 장치 내 네트워크 관리 카드에 적용할 수 있는 최신 펌웨어 버전이 일년 내내 제공됩니다. 일반적으로 이러한 릴리스에는 버그 수정 사항, 새로운 기능 및 일반적인 개선 사항이 함께 포함되어 있습니다. 또
한 보통 사용되는 네트워크 프로토콜의 알려진 취약점을 패치하거나 기능 관련 보안을 강화하는 보안 관련 업데이트를 포함하는 경우가 많습니다. 일반적으로 제공되는 최신 펌웨어를 적용하는 것이 좋습니다.</p>
      <h1>권장 조치</h1>
      <p>모든 장치에서 오래된 펌웨어를 업데이트합니다.</p>
      <div className='box-chart'>
        <Chart options={options} series={series} type='bar' height={300} />
      </div>
    </div>
  )
}

export default ReportForm
