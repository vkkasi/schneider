/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
import { useState } from 'react'
import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap'
import Select from 'react-select'

const aligoapi = require('aligoapi');

import axios from 'axios'
axios.defaults.withCredentials = true;

const AuthData = {
  key: '44hnvhpo8ee9yjyo606y3s7ch2icq8w2',
  user_id: 'infoczcorp',
  testmode_yn: 'Y'
}

const colorOptions = [
  { value: '홍길동', label: '홍길동', color: '#00B8D9', isFixed: true },
  { value: '이순신', label: '이순신', color: '#0052CC', isFixed: true },
  { value: '슈나이더', label: '슈나이더', color: '#5243AA', isFixed: true },
  { value: '담당자', label: '담당자', color: '#FF5630', isFixed: false },
  // { value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false },
  // { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
]

const ModalMemoAssignment = ({ open, handleModal }) => {

  // POST 메서드 구현 예제
  async function postData(url = '', data = {}) {
    // 옵션 기본 값은 *로 강조
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE 등
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json',
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    console.log('asdf')
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
  }

  const onClickSubmit = () => {
    const body = {
      key: '44hnvhpo8ee9yjyo606y3s7ch2icq8w2',
      user_id: 'infoczcorp',
      // sender: '024030122',  // (최대 16bytes)
      receiver: '01072277933', // 컴마()분기 입력으로 최대 1천명
      // msg: 'TEST',	// (1~2,000Byte)
    }

    // postData('http://15.164.145.174:8022/smsSend?key=44hnvhpo8ee9yjyo606y3s7ch2icq8w2&user_id=infoczcor&receiver=01072277933')
    // .then((data) => {
    //   console.log('data', data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
    // })
    // .catch((err) => {
    //   console.log('err', err);
    // })

    axios.get('http://www.boan2da.com/api/index.php?strApiName=apiSendSms')
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('err', err);
    })
    handleModal();
  }

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
          {/* <div className='modal-memo-add-checkbox'>
            <Input type='checkbox' className='custom-control-primary' id='Sensor Failure' label='Enable automatic rejection'/>
          </div> */}
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={onClickSubmit}>
            저장
          </Button>
        </ModalFooter>
      </Modal> 
    </>
  )
}

export default ModalMemoAssignment