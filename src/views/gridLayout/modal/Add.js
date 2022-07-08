import { selectThemeColors } from '@utils'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap'
import Select from 'react-select'

import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux'
import { setWidget, setLayout, setWidgetDetailInsert } from '../store'

import { useForm, Controller } from 'react-hook-form';

const ModalMemoAssignment = ({ open, handleModal }) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.gridLayout);

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // console.log('data', data);
    if (_.every(data, field => field.length > 0)) {
      const LastLayout = store.layout[store.layout.length - 1];
      // console.log('LastLayout', LastLayout)
      const date = new Date();
      const tmpIdx = date.getTime();

      dispatch(setWidgetDetailInsert({ idx: tmpIdx, type: data.widgetType, title: data.widgetTitle }))
      dispatch(setWidget([
        ...store.widget,
        { idx: tmpIdx, widgetIdx: tmpIdx },
      ]))

      dispatch(setLayout([
        ...store.layout,
        { i: tmpIdx.toString(), x: (LastLayout.x + LastLayout.w) > 9 ? 0 : LastLayout.x + LastLayout.w, y: Infinity, w: 3, h: 9 },
      ]))

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
            <div className='mb-1'>
              <Controller
                defaultValue=''
                control={control}
                id='widgetTitle'
                name='widgetTitle'
                render={({ field }) => <Input placeholder='위젯 제목' invalid={errors.widgetTitle && true} {...field} />}
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
                  // defaultValue={['sdfsd']}
                  // isMulti
                  // name='colors'
                  options={store.selectOptions}
                  className='react-select'
                  classNamePrefix='select'
                  value={_.find(store.selectOptions, {value: field.value})}
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