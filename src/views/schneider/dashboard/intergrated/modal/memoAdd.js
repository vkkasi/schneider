/* eslint-disable object-shorthand */
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, CardText, Input } from 'reactstrap'
// import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: 'BMS',
    content: (
      <div className='modal-memo-add-checkbox'>
        <Input type='checkbox' className='custom-control-primary' id='Sensor Failure' label='Sensor Failure'/>
        <Input type='checkbox' className='custom-control-primary' id='Window Open' label='Window Open'/>
        <Input type='checkbox' className='custom-control-primary' id='Actuator Failure' label='Actuator Failure'/>
      </div>
    )
  },
  {
    title: 'Chilled Water Supply High Temp',
    content: (
      <div className='modal-memo-add-checkbox'>
        <Input type='checkbox' className='custom-control-primary' id='Sensor Failure' label='Sensor Failure'/>
        <Input type='checkbox' className='custom-control-primary' id='Window Open' label='Window Open'/>
        <Input type='checkbox' className='custom-control-primary' id='Actuator Failure' label='Actuator Failure'/>
      </div>
    )
  },
  {
    title: 'HVAC Alarm',
    content: (
      <div className='modal-memo-add-checkbox'>
        <Input type='checkbox' className='custom-control-primary' id='Sensor Failure' label='Sensor Failure'/>
        <Input type='checkbox' className='custom-control-primary' id='Window Open' label='Window Open'/>
        <Input type='checkbox' className='custom-control-primary' id='Actuator Failure' label='Actuator Failure'/>
      </div>
    )
  }
]

const ModalMemoAdd = ({ open, handleModal }) => {

  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered'>
        <ModalHeader toggle={() => handleModal()}>메모 추가</ModalHeader>
        <ModalBody>
          {/* <AppCollapse data={data} type='margin' accordion /> */}
        </ModalBody>
      </Modal> 
    </>
  )
}

export default ModalMemoAdd