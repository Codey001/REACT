import UserContextProvider from '../src/context/UserContextProvider'
import './App.css'
import { Login } from './componenets/Login'
import { Profile } from './componenets/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
