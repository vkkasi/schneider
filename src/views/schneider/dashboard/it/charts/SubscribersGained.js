import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from 'react-feather'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const SubscribersGained = ({ kFormatter }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color='primary'
      stats={kFormatter(data.analyticsData.subscribers)}
      statTitle='네트워크'
      series={data.series}
      type='area'
    />
  ) : null
}

export default SubscribersGained
