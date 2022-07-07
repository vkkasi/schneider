import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

const Default = ({ onClickSetting }) => {
  return (
    <Card>
      <CardHeader>
        <div></div>
        <CardTitle className='ta-c' tag='h4'></CardTitle>
        <Settings size={18} className='cursor-pointer' onClick={() => onClickSetting()} />
      </CardHeader>
      <CardBody>
      </CardBody>
    </Card>
  )
}

export default Default