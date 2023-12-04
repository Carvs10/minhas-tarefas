import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  search?: string
  type: 'priority' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}
const initialState: FilterState = {
  search: '',
  type: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.type = action.payload.type
      state.value = action.payload.value
    }
  }
})

export const { changeSearch, changeFilter } = filterSlice.actions

export default filterSlice.reducer
