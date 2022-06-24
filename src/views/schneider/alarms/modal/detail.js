/* eslint-disable object-shorthand */
import { Modal, ModalHeader, ModalBody, Button, Table } from 'reactstrap'

const ModalDetail = ({ open, handleModal }) => {
  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '400px',
    padding: '0'
  }

  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered modal-normal-size'>
        <ModalHeader toggle={() => handleModal()}>알람 상세보기</ModalHeader>
        <ModalBody>
          <div className='modal-alarm-detail-top'>
            <div className='number bg-smarty-red'>53</div>
            <div className='contents'>
              <div className='top'>
                <h3>회로 차단기 트립</h3>
                <Button className='btn primary'>나에게 배정</Button>
              </div>
              <div className='bottom'>
                <div className='item'>
                  <div>발생일</div>
                  <div>2022.02.20 09:10:33</div>
                </div>
                <div className='item'>
                  <div>수집일</div>
                  <div>2022.02.20 09:15:33</div>
                </div>
                <div className='item'>
                  <div>횟수</div>
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-alarm-detail-buttons'>
            <Button.Ripple color='primary'>재확인</Button.Ripple>
            <Button.Ripple color='secondary'>숨기기</Button.Ripple>
            <Button.Ripple color='success'>알람끄기</Button.Ripple>
            <Button.Ripple color='danger'>기록보기</Button.Ripple>
            <Button.Ripple color='warning'>첨부보기</Button.Ripple>
            <Button.Ripple color='info'>장비상세보기</Button.Ripple>
          </div>
          <div className='modal-alarm-detail-table'>
            <Table>
              <tbody>
                <tr>
                  <th>알람 상태</th>
                  <td>Alarm</td>
                  <th>분류</th>
                  <td>Emergency Lighting</td>
                  <th>SEQ-Number</th>
                  <td>4,015,875</td>
                </tr>
                <tr>
                  <th>알람명</th>
                  <td colSpan={5}>Emergency Lighting - A_18 Communication Fault Alarm</td>
                </tr>
                <tr>
                  <th>알람내용</th>
                  <td colSpan={5}>A_18 Communication Fault Alarm</td>
                </tr>
                <tr>
                  <th>이전상태</th>
                  <td colSpan={2}>Reset</td>
                  <th>평가상태</th>
                  <td colSpan={2}>Upper Limit Alarm</td>
                </tr>
                <tr>
                  <th>변경횟수</th>
                  <td colSpan={2}>2</td>
                  <th>배정시간</th>
                  <td colSpan={2}>0000-00-00 00:00:00</td>
                </tr>
                <tr>
                  <th>기본상태</th>
                  <td colSpan={2}>True</td>
                  <th>배정상태</th>
                  <td colSpan={2}>Unassigned</td>
                </tr>
                <tr>
                  <th>로그인여부</th>
                  <td colSpan={2}>True</td>
                  <th>숨김여부</th>
                  <td colSpan={2}>False</td>
                </tr>
                <tr>
                  <th>가용운영정책</th>
                  <td colSpan={5}>Acknowledge, Disable, Recheck, Hide, Disable logging, Assign, Self assign, Add Comment</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
      </Modal> 
    </>
  )
}

export default ModalDetail