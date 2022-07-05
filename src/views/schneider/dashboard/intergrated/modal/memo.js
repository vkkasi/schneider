/* eslint-disable object-shorthand */
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button, Table, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import ModalMemoAdd from './memoAdd'

const ModalMemo = ({ open, handleModal }) => {
  const [activeTab, setActiveTab] = useState('1')
  const [activeModalMemoAdd, setActiveModalMemoAdd] = useState(false)

  const toggle = tab => setActiveTab(tab)

  const handleMemoAdd = () => {
    setActiveModalMemoAdd(prev => !prev)
  }

  const handleModalMemoAdd = () => {
    setActiveModalMemoAdd(prev => !prev)
  }

  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered modal-normal-size'>
        <ModalHeader toggle={() => handleModal()}>메모 관리</ModalHeader>
        <ModalBody>
          <Nav pills fill className='modal-memo-tabs'>
            <NavItem>
              <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                사유 메모
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                실행 메모
              </NavLink>
            </NavItem>
          </Nav>
          <div className='modal-alarm-opinion-table'>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Table>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>사유 내역</th>
                      <th>등록자</th>
                      <th>등록일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>센서 불안정 확인</td>
                      <td>apcAdmin</td>
                      <td>2022.06.21<br />10:12:33</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>갑작스런 온도 변화</td>
                      <td>apcAdmin</td>
                      <td>2022.06.18<br />15:24:22</td>
                    </tr>
                  </tbody>
                </Table>
              </TabPane>
              <TabPane tabId='2'>
                <Table>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>실행 내역</th>
                      <th>등록자</th>
                      <th>등록일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>센서 변경</td>
                      <td>apcAdmin1</td>
                      <td>2022.06.23<br />13:22:22</td>
                    </tr>
                  </tbody>
                </Table>
              </TabPane>
            </TabContent>
          </div>
          <div className='modal-bottom-buttons'>
            <Button block color='primary' onClick={handleMemoAdd}>추가하기</Button>
          </div>
        </ModalBody>
      </Modal> 
      <ModalMemoAdd open={activeModalMemoAdd} handleModal={handleModalMemoAdd}/>
    </>
  )
}

export default ModalMemo