import { Card, CardHeader, CardTitle, CardBody, CardFooter, Row, Col, Button } from 'reactstrap'
import { Settings } from 'react-feather'

const Widget1 = ({options}) => {

  const renderBody = (arr, rows) => {
    const aNew = []
    const iLen = arr.length
    let iStart = 0 //슬라이스 시작
    let iEnd = 0  //슬라이스 끝
    const iShare = parseInt(iLen / rows) //몫
    const iRemain = iLen % rows  //나머지

    for (let i = 0; i < rows; i++) {
      iEnd += iShare
      if (i < iRemain) iEnd += 1
      if (iEnd > iLen - 1) iEnd = iLen
      
    //   console.log('i', i)
    //   console.log('iLen', iLen)

      aNew.push(arr.slice(iStart, iEnd))

      iStart = iEnd

      if (i + 1 > iLen - 1) break
    }

    // console.log('aNew', aNew)

    // let sHtml = '<div>asdfasdf</div>'
    // sHtml += '<div>131231</div>'

    return (
      <Row>
        {/* <div dangerouslySetInnerHTML={ {__html: sHtml} }></div> */}

        {aNew.map((item, index) => (
          <Col key={index}>
            {item.map((item2, index2) => (
              <div key={index2} className='d-flex justify-content-center work-schedule'>
                <div className='item text-center'>{item2.name}</div>
                <div className='item flex-grow-1'>{item2.state}</div>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    )
  }

  const renderFooter = (bg, fms_yn) => {
    return (
      <>
        <Button.Ripple size='sm' className={`'alarm_view bg-smarty-${bg}`}>알람보기</Button.Ripple>
        {fms_yn && <Button.Ripple size='sm' className='fms_link bg-smarty-blue'>FMS 바로가기</Button.Ripple>}
      </>
    )
  }

  return (
    <Card className='card-transaction installation-widget'>
      <CardHeader>
        <div className='circle-alarm'><span className={`bg-smarty-${options.bg}`}></span></div>
        <CardTitle className='ta-c' tag='h4'>{options.title}</CardTitle>
        <Settings size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        {renderBody(options.data, options.rows)}
      </CardBody>
      <CardFooter className='d-flex justify-content-between card-footer'>
        {renderFooter(options.bg, options.fms_yn)}
      </CardFooter>
    </Card>
  )
}

export default Widget1
