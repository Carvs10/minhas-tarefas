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
      title: 'Estudar JavaScript',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.CLOSED,
      description: ''
    },
    {
      id: 2,
      title: 'Ir para a Academia',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CLOSED,
      description: 'Treinar membros superiores'
    },
    {
      id: 3,
      title: 'Estudar TypeScript',
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
    },
    save: (state, action: PayloadAction<Task>) => {
      const idx = state.items.findIndex((task) => task.id === action.payload.id)

      if (idx >= 0) {
        state.items[idx] = action.payload
      }
    },
    add: (state, action: PayloadAction<Task>) => {
      const hasTask = state.items.find(
        (task) =>
          task.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      )

      if (hasTask) {
        alert('Já existe uma tarefa com esse título!')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { remove, save, add } = tasksSlice.actions
export default tasksSlice.reducer
