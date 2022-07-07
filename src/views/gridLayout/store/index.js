// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
      { idx: 101, type: 'workSchedule', title: '작업 일정' },
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
    // getWidgetData: (state, action) => {
    //   state.widgetData = action.payload
    // }

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

export const { setWidget, setLayout, setOriginLayout, setPageId, setWidgetDetailInsert } = gridLayoutSlice.actions;

export default gridLayoutSlice.reducer
