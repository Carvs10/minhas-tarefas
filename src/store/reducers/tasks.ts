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
    add: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const hasTask = state.items.find(
        (task) =>
          task.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      )

      if (hasTask) {
        alert('Já existe uma tarefa com esse título!')
      } else {
        const lastTask = state.items[state.items.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; closed: boolean }>
    ) => {
      const idx = state.items.findIndex((task) => task.id === action.payload.id)

      if (idx >= 0) {
        state.items[idx].status = action.payload.closed
          ? enums.Status.CLOSED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, save, add, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
