import Nouislider from 'nouislider-react'
import { Card, CardBody } from 'reactstrap'

const SliderScalePips = ({ direction }) => {
  return (
    <Card>
      <CardBody>
        <Nouislider
          start={10}
          step={10}
          tooltips={true}
          direction={direction}
          range={{
            min: 0,
            max: 100
          }}
          pips={{
            mode: 'steps',
            stepped: true,
            density: 5
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderScalePips
