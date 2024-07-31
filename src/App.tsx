import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TudoList";

import{Provider as ReduxProvider}from  'react-redux'
import { store } from "./store";

export function App() {

  return (
    <ReduxProvider store={store}>
      <TodoList/>
      <AddTodo/>
    </ReduxProvider>
  )
}
