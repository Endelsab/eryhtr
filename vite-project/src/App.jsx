import Add from './components/AddStudent'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import StudentList from "./components/StudentList"
import Update from './components/Update'

function App() {
 

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={ <StudentList/>}/>
          <Route path='/add' element={ <Add/>}/>
          <Route path='/update/:id' element={ <Update/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
