import { useState } from 'react'
import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap'
import Select from 'react-select'

import { useForm, Controller } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { setWidget, setLayout, setOriginLayout, setPageId } from '../store'

const selectOptions = [
  { value: 'weather', label: '날씨' },
  { value: 'reatimeAlarm', label: '실시간 알람' },
  { value: 'timeUseAmount', label: '시간대별 전기/물/가스 사용량' },
  { value: 'workSchedule', label: '작업일정' },
  { value: 'timeTempHumi', label: '시간대별 온/습도' },
  { value: 'greenKpis', label: 'Green KPI\'s' },
]

const ModalSetting = ({ open, handleModal }) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.gridLayout)

  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // console.log('data', data);
    if (Object.values(data).every(field => field.length > 0)) {
      const LastLayout = store.layout[store.layout.length - 1];

      console.log('store', store);

      // dispatch(setWidget([
      //   ...store.widget,
      //   { idx: (parseInt(LastLayout.i) + 1).toString(), widgetIdx: 0 },
      // ]))
  
      // dispatch(setLayout([
      //   ...store.layout,
      //   { i: (parseInt(LastLayout.i) + 1).toString(), x: (LastLayout.x + LastLayout.w) > 9 ? 0 : LastLayout.x + LastLayout.w, y: Infinity, w: 3, h: 9 },
      // ]))
  
      // handleModal();
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered'>
        <ModalHeader toggle={() => handleModal()}>위젯 설정</ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <div className='mb-1'>
              <Controller
                defaultValue=''
                control={control}
                id='widgetTitle'
                name='widgetTitle'
                render={({ field }) => <Input placeholder='위젯 제목' invalid={errors.firstNameBasic && true} {...field} />}
              />
            </div>
            <Controller
              defaultValue=''
              control={control}
              id='widgetType'
              name='widgetType'
              render={
                ({ field }) => (<Select
                  isClearable={true}
                  theme={selectThemeColors}
                  defaultValue={['sdfsd']}
                  // isMulti
                  // name='colors'
                  options={selectOptions}
                  className='react-select'
                  classNamePrefix='select'
                  inputRef={field.ref}
                  value={selectOptions.find(c => c.value === field.value)}
                  onChange={val => field.onChange(val.value)}
                />)
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button color='primary'>
              저장
            </Button>
          </ModalFooter>
        </Form>
      </Modal> 
    </>
  )
}

export default ModalSetting