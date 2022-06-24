/* eslint-disable object-shorthand */
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Settings } from 'react-feather'

import ModalDetail from '../../resources/modal/Detail'

const WidgetGridCondition = () => {
  const [activeModalDetail, setActiveModalDetail] = useState(false)

  const handleModalDetail = () => {
    setActiveModalDetail(prev => !prev)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div></div>
          <CardTitle className='ta-c' tag='h4'>1F Rack 현황</CardTitle>
          <Settings size={18} className='cursor-pointer' />
        </CardHeader>
        <CardBody>
          <div className='widget-grid'>
              <RenderBackGrid />
              <div className='item w_4 h_2 t_1 l_1' onClick={handleModalDetail}><span>1F-110</span></div>
              <div className='item w_4 h_2 t_1 l_5' onClick={handleModalDetail}><span>1F-120</span></div>
              <div className='item w_4 h_2 t_1 l_13' onClick={handleModalDetail}><span>1F-210</span></div>
              <div className='item w_4 h_2 t_1 l_17' onClick={handleModalDetail}><span>1F-220</span></div>
              <div className='item w_4 h_2 t_1 l_25' onClick={handleModalDetail}><span>1F-310</span></div>
              <div className='item w_4 h_2 t_1 l_29' onClick={handleModalDetail}><span>1F-320</span></div>
              <div className='item w_4 h_2 t_1 l_37' onClick={handleModalDetail}><span>1F-410</span></div>
              <div className='item w_4 h_2 t_1 l_41' onClick={handleModalDetail}><span>1F-420</span></div>
              <div className='item w_4 h_2 t_3 l_1' onClick={handleModalDetail}><span>1F-111</span></div>
              <div className='item w_4 h_2 t_3 l_5' onClick={handleModalDetail}><span>1F-121</span></div>
              <div className='item w_4 h_2 t_3 l_13' onClick={handleModalDetail}><span>1F-211</span></div>
              <div className='item w_4 h_2 t_3 l_17' onClick={handleModalDetail}><span>1F-221</span></div>
              <div className='item w_4 h_2 t_3 l_25' onClick={handleModalDetail}><span>1F-311</span></div>
              <div className='item w_4 h_2 t_3 l_29' onClick={handleModalDetail}><span>1F-321</span></div>
              <div className='item w_4 h_2 t_3 l_37' onClick={handleModalDetail}><span>1F-411</span></div>
              <div className='item w_4 h_2 t_3 l_41' onClick={handleModalDetail}><span>1F-421</span></div>
              <div className='item w_4 h_2 t_7 l_1' onClick={handleModalDetail}><span>1F-112</span></div>
              <div className='item w_4 h_2 t_7 l_5' onClick={handleModalDetail}><span>1F-122</span></div>
              <div className='item w_4 h_2 t_7 l_13' onClick={handleModalDetail}><span>1F-212</span></div>
              <div className='item w_4 h_2 t_7 l_17' onClick={handleModalDetail}><span>1F-222</span></div>
              <div className='item w_4 h_2 t_7 l_25' onClick={handleModalDetail}><span>1F-312</span></div>
              <div className='item w_4 h_2 t_7 l_29' onClick={handleModalDetail}><span>1F-322</span></div>
              <div className='item w_4 h_2 t_7 l_37' onClick={handleModalDetail}><span>1F-412</span></div>
              <div className='item w_4 h_2 t_7 l_41' onClick={handleModalDetail}><span>1F-422</span></div>
              <div className='item w_4 h_2 t_10 l_1' onClick={handleModalDetail}><span>1F-113</span></div>
              <div className='item w_4 h_2 t_10 l_5' onClick={handleModalDetail}><span>1F-123</span></div>
              <div className='item w_4 h_2 t_10 l_13' onClick={handleModalDetail}><span>1F-213</span></div>
              <div className='item w_4 h_2 t_10 l_17' onClick={handleModalDetail}><span>1F-223</span></div>
              <div className='item w_4 h_2 t_10 l_25' onClick={handleModalDetail}><span>1F-313</span></div>
              <div className='item w_4 h_2 t_10 l_29' onClick={handleModalDetail}><span>1F-323</span></div>
              <div className='item w_4 h_2 t_10 l_37' onClick={handleModalDetail}><span>1F-413</span></div>
              <div className='item w_4 h_2 t_10 l_41' onClick={handleModalDetail}><span>1F-423</span></div>
              <div className='item w_4 h_3 t_12 l_1' onClick={handleModalDetail}><span>1F-114</span></div>
              <div className='item w_4 h_3 t_12 l_5' onClick={handleModalDetail}><span>1F-124</span></div>
              <div className='item w_4 h_3 t_12 l_13' onClick={handleModalDetail}><span>1F-214</span></div>
              <div className='item w_4 h_3 t_12 l_17' onClick={handleModalDetail}><span>1F-224</span></div>
              <div className='item w_4 h_3 t_12 l_25' onClick={handleModalDetail}><span>1F-314</span></div>
              <div className='item w_4 h_3 t_12 l_29' onClick={handleModalDetail}><span>1F-324</span></div>
              <div className='item w_4 h_3 t_12 l_37' onClick={handleModalDetail}><span>1F-414</span></div>
              <div className='item w_4 h_3 t_12 l_41' onClick={handleModalDetail}><span>1F-424</span></div>
              <div className='item w_4 h_4 t_15 l_1' onClick={handleModalDetail}><span>1F-115</span></div>
              <div className='item w_4 h_4 t_15 l_5' onClick={handleModalDetail}><span>1F-125</span></div>
              <div className='item w_4 h_4 t_15 l_13' onClick={handleModalDetail}><span>1F-215</span></div>
              <div className='item w_4 h_4 t_15 l_17' onClick={handleModalDetail}><span>1F-225</span></div>
              <div className='item w_4 h_4 t_15 l_25' onClick={handleModalDetail}><span>1F-315</span></div>
              <div className='item w_4 h_4 t_15 l_29' onClick={handleModalDetail}><span>1F-325</span></div>
              <div className='item w_4 h_4 t_15 l_37' onClick={handleModalDetail}><span>1F-415</span></div>
              <div className='item w_4 h_4 t_15 l_41' onClick={handleModalDetail}><span>1F-425</span></div>

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

export default WidgetGridCondition
