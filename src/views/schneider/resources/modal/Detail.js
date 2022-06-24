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
            <div className='number'><img src='/images/temp.png'/></div>
            <div className='contents'>
              <div className='top'>
                <h3>apc1A6300</h3>
                <span className='circle bg-success'>A1</span>
              </div>
              <div className='bottom'>
                <div className='item'>
                  <div>고유번호</div>
                  <div>ZA00000012</div>
                </div>
                <div className='item'>
                  <div>IP</div>
                  <div>192.168.1.20</div>
                </div>
                <div className='item'>
                  <div>분류</div>
                  <div>Small Data Center</div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-alarm-detail-buttons'>
            <Button.Ripple color='info'>기본정보</Button.Ripple>
            <Button.Ripple color='secondary' disabled>센서현황</Button.Ripple>
            <Button.Ripple color='secondary' disabled>벤치마크</Button.Ripple>
            <Button.Ripple color='secondary' disabled>알람기록</Button.Ripple>
            <Button.Ripple color='secondary' disabled>관리기록</Button.Ripple>
            <Button.Ripple color='primary'>장비바로가기</Button.Ripple>
          </div>
          <div className='modal-alarm-detail-table'>
            <Table>
              <tbody>
              <tr>
                  <th>AOS version</th>
                  <td>v6.6.4</td>
                  <th>Application version</th>
                  <td>v6.6.4</td>
                </tr>
                <tr>
                  <th>Battery Internal SKU Number</th>
                  <td>APCRBC123</td>
                  <th>DDF Version</th>
                  <td>1.13.0.26</td>
                </tr>
                <tr>
                  <th>Firmware</th>
                  <td>UPS 03.5 (ID1015)</td>
                  <th>Gateway</th>
                  <td>Andover ITE Demo Gateway</td>
                </tr>
                <tr>
                  <th>Hardware version</th>
                  <td></td>
                  <th>Input Phase Count</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>IP Address</th>
                  <td>192.168.0.8</td>
                  <th>Manufacturer</th>
                  <td>APC</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>Smart-UPS 750</td>
                  <th>Output Phase Count</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>Recommended Replace Date</th>
                  <td>02/23/2024</td>
                  <th>Serial No.</th>
                  <td>3S1924X16248</td>
                </tr>
                <tr>
                  <th>SKU</th>
                  <td>SMT750RM2UC</td>
                  <th>Type</th>
                  <td>UPS</td>
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