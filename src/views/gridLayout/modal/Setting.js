import { useEffect, useState } from 'react'
import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap'
import Select from 'react-select'

import { useForm, Controller } from 'react-hook-form';
import _  from 'lodash'

import { useDispatch, useSelector } from 'react-redux';
import { setWidgetDetailUpdate } from '../store'

const ModalSetting = ({ idx, open, handleModal }) => {
  if (!open) return null;

  const [widgetData, setWidgetData] = useState(null)
 
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

  useEffect(() => {
    setWidgetData(_.find(store.tmpWidgetDetail, {idx: idx}))
    
  }, [])

  const onSubmit = (data) => {
    // console.log('data', data);
    if (Object.values(data).every(field => field.length > 0)) {
      dispatch(setWidgetDetailUpdate({ idx: idx, type: data.widgetType, title: data.widgetTitle }))

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

  if (!(widgetData)) return;
  return (
    <>
      <Modal isOpen={open} className='modal-dialog-centered'>
        <ModalHeader toggle={() => handleModal()}>위젯 설정</ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <div className='mb-1'>
              <Controller
                defaultValue={widgetData.title}
                control={control}
                id='widgetTitle'
                name='widgetTitle'
                render={({ field }) => <Input placeholder='위젯 제목' invalid={errors.firstNameBasic && true} {...field} />}
              />
            </div>
            <Controller
              defaultValue={widgetData.type}
              control={control}
              id='widgetType'
              name='widgetType'
              render={
                ({ field }) => (<Select
                  isClearable
                  theme={selectThemeColors}
                  defaultValue={_.find(store.selectOptions, {value: widgetData.type})}
                  // isMulti
                  // name='colors'
                  options={store.selectOptions}
                  className='react-select'
                  classNamePrefix='select'
                  inputRef={field.ref}
                  value={_.find(store.selectOptions, {value: field.value})}
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