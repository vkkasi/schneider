/* eslint-disable object-shorthand */
import { useState } from 'react'
import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap'
import Select from 'react-select'

const colorOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isFixed: true },
  { value: 'purple', label: 'Purple', color: '#5243AA', isFixed: true },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: false },
  { value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false },
  { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
]

const ModalMemoAssignment = ({ open, handleModal }) => {
  
  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered'>
        <ModalHeader toggle={() => handleModal()}>담당 배정</ModalHeader>
        <ModalBody>
          <Select
            isClearable={false}
            theme={selectThemeColors}
            defaultValue={[colorOptions[2], colorOptions[3]]}
            isMulti
            name='colors'
            options={colorOptions}
            className='react-select'
            classNamePrefix='select'
          />
          <div className='modal-memo-add-checkbox'>
            <Input type='checkbox' className='custom-control-primary' id='Sensor Failure' label='Enable automatic rejection'/>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleModal}>
            저장
          </Button>
        </ModalFooter>
      </Modal> 
    </>
  )
}

export default ModalMemoAssignment