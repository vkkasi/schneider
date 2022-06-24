/* eslint-disable object-shorthand */
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

// 다음 주소 API
import DaumPostcode from 'react-daum-postcode'

const AddressModal = ({ open, handleModal, returnData }) => {
  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '400px',
    padding: '0'
  }

  const onComplete = (data) => {
    //  (동, 건물명) 표기
    let extAddress = ''
    if (data.bname !== '') extAddress += data.bname
    if (data.buildingName !== '') extAddress += extAddress !== '' ? `, ${ data.buildingName }` : data.buildingName
    extAddress = extAddress !== '' ? ` (${ extAddress })` : ''

    returnData({
      zoneCode: data.zonecode,
      address: data.address,
      extAddress: extAddress
    })
  }

  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered'>
        <ModalHeader toggle={() => handleModal()}>주소검색</ModalHeader>
        <ModalBody className='p-0'>
          <DaumPostcode style={postCodeStyle} autoClose onComplete={onComplete} />
        </ModalBody>
      </Modal> 
    </>
  )
}

export default AddressModal