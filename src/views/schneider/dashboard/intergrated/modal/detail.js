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
                <h3>온도 감지</h3>
                <Button className='btn primary'>나에게 배정</Button>
              </div>
              <div className='bottom'>
                <div className='item'>
                  <div>발생일</div>
                  <div>2022-07-05T05:51:38.077Z</div>
                </div>
                <div className='item'>
                  <div>수집일</div>
                  <div>2022-07-05T05:51:38.077Z</div>
                </div>
                <div className='item'>
                  <div>횟수</div>
                  <div>1</div>
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
                  <td>경고</td>
                  <th>SEQ-Number</th>
                  <td>ZA00000004</td>
                </tr>
                <tr>
                  <th>알람명</th>
                  <td colSpan={5}>배터리 고온 알람 - 28.5</td>
                </tr>
                <tr>
                  <th>알람내용</th>
                  <td colSpan={5}>배터리 고온 알람 - 28.5</td>
                </tr>
                <tr>
                  <th>이전상태</th>
                  <td colSpan={2}>-</td>
                  <th>평가상태</th>
                  <td colSpan={2}>-</td>
                </tr>
                <tr>
                  <th>변경횟수</th>
                  <td colSpan={2}>0</td>
                  <th>배정시간</th>
                  <td colSpan={2}>-</td>
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
                  <td colSpan={5}>-</td>
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