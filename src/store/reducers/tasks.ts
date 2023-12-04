import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Tarefa'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      title: 'Estudar JS',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING,
      description: ''
    },
    {
      id: 2,
      title: 'Ir para a Academia',
      priority: enums.Priority.URGENT,
      status: enums.Status.CLOSED,
      description: 'Treinar membros superiores'
    },
    {
      id: 3,
      title: 'Estudar React',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING,
      description: 'Praticar o useEffect'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
