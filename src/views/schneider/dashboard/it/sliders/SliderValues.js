import Nouislider from 'nouislider-react'
import { Card, CardBody } from 'reactstrap'

const SliderValues = ({ direction }) => {
  return (
      <Nouislider
        start={[0, 500]}
        direction={direction}
        snap={true}
        connect={true}
        range={{
          min: 0,
          '10%': 50,
          '20%': 100,
          '30%': 150,
          '40%': 500,
          '50%': 800,
          max: 1000
        }}
      />
  )
}

export default SliderValues
