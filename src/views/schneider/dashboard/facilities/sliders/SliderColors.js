import Nouislider from 'nouislider-react'
import { Card, CardBody } from 'reactstrap'

const SliderValues = ({ direction }) => {
  const colorOptions = {
    start: [40, 60],
    connect: true,
    behaviour: 'drag',
    step: 10,
    tooltips: true,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 5
    },
    direction
  }

  return (
    <Card>
      <CardBody>
        <Nouislider className='slider-warning' {...colorOptions} />
      </CardBody>
    </Card>
  )
}

export default SliderValues
