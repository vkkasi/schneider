/* eslint-disable object-shorthand */
import { Modal, ModalHeader, ModalBody, Button, Table, Input } from 'reactstrap'

const ModalOpinion = ({ open, handleModal }) => {
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
        <ModalHeader toggle={() => handleModal()}>의견 등록</ModalHeader>
        <ModalBody className='p-0'>
          <div className='modal-alarm-opinion-input'>
            <div className='title'>의견</div>
            <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
            <span className='btn-apply'>등록하기</span>
          </div>
          <div className='modal-alarm-opinion-table'>
            <Table>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>의견</th>
                  <th>등록자</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>시설팀에서 확인이 필요할 것 같습니다.</td>
                  <td>Admin3</td>
                  <td>2022.06.23<br />13:22:22</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>동일 현상이 주 3회 이상 지속적으로 발생하고 있습니다.</td>
                  <td>Admin2</td>
                  <td>2022.06.21<br />10:12:33</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>설비 공사 이후 알람 발생이 많아 진것 같습니다.</td>
                  <td>Admin1</td>
                  <td>2022.06.18<br />15:24:22</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
      </Modal> 
    </>
  )
}

export default ModalOpinion