import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SideBar from './containers/SideBar'
import TaskList from './containers/TaskList'
import GlobalStyle, { Container } from './styles'
import store from './store'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element:
//   },
// ])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
