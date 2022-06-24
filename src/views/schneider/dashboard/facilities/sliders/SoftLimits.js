/* eslint-disable object-shorthand */
import Nouislider from 'nouislider-react'
import { useState, useRef } from 'react'
import { Card, CardBody } from 'reactstrap'

const SliderValues = ({ direction }) => {
  const refNoUiSlider = useRef()
  const objPipsValue = {
    start: 20,
    end: 80
  }

  const handleChange = (val) => {
    const intVal = parseInt(val)

    if (intVal < objPipsValue.start) {
      refNoUiSlider.current.noUiSlider.set(objPipsValue.start)
    } else if (intVal > objPipsValue.end) {
      refNoUiSlider.current.noUiSlider.set(objPipsValue.end)
    }
  }
  
  const options = {
    start: 50,
    range: {
        min: 0,
        max: 100
    },
    instanceRef: refNoUiSlider,
    pips: {
        mode: 'values',
        values: [objPipsValue.start, objPipsValue.end],
        density: 4
    },
    onChange: (e) => handleChange(e)
  }

  return (
    <Card>
      <CardBody>
        <Nouislider className='slider-warning' {...options} />
      </CardBody>
    </Card>
  )
}

export default SliderValues
