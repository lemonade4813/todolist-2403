import { Provider } from "react-redux"
import TodoList from "./components/List"
import store from "./store/store"

function App() {

  return (
    
    <Provider store={store}>
      <div className="border-2 border-soild border-white w-1/3 h-96 mx-auto my-40 rounded-2xl">
          <TodoList/>
      </div>
    </Provider>
  )
}

export default App
