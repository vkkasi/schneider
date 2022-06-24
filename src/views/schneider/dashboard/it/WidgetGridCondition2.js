/* eslint-disable object-shorthand */
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

import ModalDetail from '../../resources/modal/Detail'

const WidgetGridCondition2 = () => {
  const [activeModalDetail, setActiveModalDetail] = useState(false)

  const handleModalDetail = () => {
    setActiveModalDetail(prev => !prev)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>2F Rack 현황</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='widget-grid' style={{height: '700px'}}>
              <RenderBackGrid />
              <div className='item w_6 h_3 t_1 l_1' onClick={handleModalDetail}><span>2F-110</span></div>
              <div className='item w_6 h_3 t_1 l_7' onClick={handleModalDetail}><span>2F-120</span></div>
              <div className='item w_6 h_4 t_4 l_1' onClick={handleModalDetail}><span>2F-111</span></div>
              <div className='item w_6 h_4 t_4 l_7' onClick={handleModalDetail}><span>2F-121</span></div>
              <div className='item w_6 h_5 t_9 l_1' onClick={handleModalDetail}><span>2F-112</span></div>
              <div className='item w_6 h_5 t_9 l_7' onClick={handleModalDetail}><span>2F-122</span></div>

              <div className='item w_6 h_3 t_1 l_14' onClick={handleModalDetail}><span>2F-210</span></div>
              <div className='item w_6 h_3 t_1 l_20' onClick={handleModalDetail}><span>2F-220</span></div>
              <div className='item w_5 h_3 t_4 l_15' onClick={handleModalDetail}><span>2F-211</span></div>
              <div className='item w_5 h_3 t_4 l_20' onClick={handleModalDetail}><span>2F-221</span></div>
              <div className='item w_6 h_4 t_9 l_14' onClick={handleModalDetail}><span>2F-212</span></div>
              <div className='item w_6 h_4 t_9 l_20' onClick={handleModalDetail}><span>2F-222</span></div>

              <div className='item w_5 h_4 t_1 l_27' onClick={handleModalDetail}><span>2F-310</span></div>
              <div className='item w_5 h_4 t_1 l_32' onClick={handleModalDetail}><span>2F-320</span></div>
              <div className='item w_5 h_4 t_5 l_27' onClick={handleModalDetail}><span>2F-311</span></div>
              <div className='item w_5 h_4 t_5 l_32' onClick={handleModalDetail}><span>2F-321</span></div>
              <div className='item w_5 h_4 t_10 l_27' onClick={handleModalDetail}><span>2F-312</span></div>
              <div className='item w_5 h_4 t_10 l_32' onClick={handleModalDetail}><span>2F-322</span></div>

              <div className='item w_5 h_2 t_1 l_38' onClick={handleModalDetail}><span>2F-410</span></div>
              <div className='item w_5 h_2 t_1 l_43' onClick={handleModalDetail}><span>2F-420</span></div>
              <div className='item w_5 h_5 t_3 l_38' onClick={handleModalDetail}><span>2F-411</span></div>
              <div className='item w_5 h_5 t_3 l_43' onClick={handleModalDetail}><span>2F-421</span></div>
              <div className='item w_5 h_2 t_10 l_38' onClick={handleModalDetail}><span>2F-411</span></div>
              <div className='item w_5 h_2 t_10 l_43' onClick={handleModalDetail}><span>2F-421</span></div>
          </div>
        </CardBody>
      </Card>
      <ModalDetail open={activeModalDetail} handleModal={handleModalDetail}/>
    </>
  )
}

const RenderBackGrid = () => {
  const result = []

  for (let i = 0; i < 2500; i++) {
    result.push(<div key={i}></div>)
  }
  return (
    <div className='back-grid'>
      {result}
    </div>
  )
   
}

export default WidgetGridCondition2
