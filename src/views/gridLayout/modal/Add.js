import { useState } from 'react'
import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap'
import Select from 'react-select'

import { useForm, Controller } from 'react-hook-form';

const selectOptions = [
  { value: 'weather', label: '날씨' },
  { value: 'reatimeAlarm', label: '실시간 알람' },
  { value: 'timeUseAmount', label: '시간대별 전기/물/가스 사용량' },
  { value: 'workSchedule', label: '작업일정' },
  { value: 'timeTempHumi', label: '시간대별 온/습도' },
  { value: 'greenKpis', label: 'Green KPI\'s' },
]

const ModalMemoAssignment = ({ open, handleModal, widgetData, setWidgetData }) => {
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('data', data);
    if (Object.values(data).every(field => field.length > 0)) {
      const LastLayout = widgetData[widgetData.length - 1].layout;

      setWidgetData([
        ...widgetData,
        { i: (parseInt(LastLayout.i) + 1).toString(), widget: data.widgetName, layout: { i: (parseInt(LastLayout.i) + 1).toString(), x: (LastLayout.x + LastLayout.w) === 12 ? 0 : LastLayout.x + LastLayout.w, y: Infinity, w: 3, h: 9 } },
      ])

      handleModal();
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
        <ModalHeader toggle={() => handleModal()}>위젯 추가</ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Controller
              defaultValue=''
              control={control}
              id='widgetName'
              name='widgetName'
              render={
                ({ field }) => (<Select
                  isClearable={true}
                  theme={selectThemeColors}
                  // defaultValue={[selectOptions[2], selectOptions[3]]}
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
              추가
            </Button>
          </ModalFooter>
        </Form>
      </Modal> 
    </>
  )
}

export default ModalMemoAssignment