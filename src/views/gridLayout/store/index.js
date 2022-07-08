// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import _ from 'lodash'

// ** Axios Imports
import axios from 'axios'

// export const getData = createAsyncThunk('datatables/getData', async params => {
//   const response = await axios.get('/api/datatables/data', params)
//   return { allData: response.data.allData, data: response.data.invoices, totalPages: response.data.total, params }
// })

export const gridLayoutSlice = createSlice({
  name: 'gridLayout',
  initialState: {
    pageId: '',
    originLayout: [],
    widget: [],
    layout: [],
    tmpWidgetDetail: [
      { idx: 100, type: 'weather', title: '날씨 위젯' },
      { idx: 101, type: 'reatimeAlarm', title: '실시간 알람' },
      { idx: 102, type: 'timeLine', title: '작업 일정' },
      { idx: 103, type: 'greenKPIs', title: 'Green KPI\'s' },
      { idx: 104, type: 'energyUse', title: '전기/물/ 사용량' },
      { idx: 105, type: 'energyUse2', title: '온/습도 현황' },
      { idx: 106, type: 'heatMap', title: '온도 현황' },
    ]
  },
  reducers: {
    setWidget: (state, action) => {
      state.widget = action.payload
    },
    setLayout: (state, action) => {
      state.layout = action.payload
    },
    setOriginLayout: (state, action) => {
      state.originLayout = action.payload
    },
    setPageId: (state, action) => {
      state.pageId = action.payload
    },
    setWidgetDetailInsert: (state, action) => {
      state.tmpWidgetDetail = [
        ...state.tmpWidgetDetail,
        action.payload
      ]
    },
    setWidgetDetailUpdate: (state, action) => {
      const newTmpWidgetDetail = state.tmpWidgetDetail.map(item => (item.idx === action.payload.idx ? action.payload : item));

      state.tmpWidgetDetail = newTmpWidgetDetail;
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(getData.fulfilled, (state, action) => {
  //     state.data = action.payload.data
  //     state.params = action.payload.params
  //     state.allData = action.payload.allData
  //     state.total = action.payload.totalPages
  //   })
  // }
})

export const { setWidget, setLayout, setOriginLayout, setPageId, setWidgetDetailInsert, setWidgetDetailUpdate } = gridLayoutSlice.actions;

export default gridLayoutSlice.reducer
