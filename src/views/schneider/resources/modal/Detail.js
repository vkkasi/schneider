/* eslint-disable object-shorthand */
import { Modal, ModalHeader, ModalBody, Button, Table } from 'reactstrap'

const ModalDetail = ({ open, handleModal, data2 }) => {
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
        {data2 ? (
            <ModalBody>
          
            <div className='modal-alarm-detail-top'>
              <div className='number'><img src='/images/temp.png'/></div>
              <div className='contents'>
                <div className='top'>
                  <h3>{data2.c_name}</h3>
                  <span className='circle bg-success'>A1</span>
                </div>
                <div className='bottom'>
                  <div className='item'>
                    <div>고유번호</div>
                    <div>{data2.c_serial_number}</div>
                  </div>
                  <div className='item'>
                    <div>IP</div>
                    <div>{data2.c_ip_addr}</div>
                  </div>
                  <div className='item'>
                    <div>분류</div>
                    <div>{data2.c_type}</div>
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
                    <td>-</td>
                    <th>Application version</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Battery Internal SKU Number</th>
                    <td>{data2.c_sku_number}</td>
                    <th>DDF Version</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Firmware</th>
                    <td>-</td>
                    <th>Gateway</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Hardware version</th>
                    <td></td>
                    <th>Input Phase Count</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>IP Address</th>
                    <td>{data2.c_ip_addr}</td>
                    <th>Manufacturer</th>
                    <td>{data2.c_manufacturer}</td>
                  </tr>
                  <tr>
                    <th>Model</th>
                    <td>{data2.c_model}</td>
                    <th>Output Phase Count</th>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>Recommended Replace Date</th>
                    <td>-</td>
                    <th>Serial No.</th>
                    <td>{data2.c_serial_number}</td>
                  </tr>
                  <tr>
                    <th>SKU</th>
                    <td>-</td>
                    <th>Type</th>
                    <td>{data2.c_type}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
            ) : ''
            }
        
      </Modal> 
    </>
  )
}

export default ModalDetail