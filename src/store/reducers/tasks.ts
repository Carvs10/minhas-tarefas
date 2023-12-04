import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Tarefa'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar JS',
      enums.Priority.IMPORTANT,
      enums.Status.PENDING,
      '',
      1
    ),
    new Task(
      'Ir para a Academia',
      enums.Priority.URGENT,
      enums.Status.CLOSED,
      'Treinar membros superiores',
      2
    ),
    new Task(
      'Estudar React',
      enums.Priority.URGENT,
      enums.Status.PENDING,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
