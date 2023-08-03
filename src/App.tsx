import "bootstrap/dist/css/bootstrap.min.css"

import {Navigate, Route, Routes} from "react-router-dom"

import { Container } from "react-bootstrap"
import NewNotes from "./NewNotes"

function App() {
  
  return (
    <Container className="my-4">

    
  <Routes>
    <Route path='/' element={<h1>Hi steno friend</h1>}/>
    <Route path='/new' element={<NewNotes/>}/>
    <Route path='*' element={<Navigate to='/'/>}/>
    <Route path="/:id">
      <Route index element={<h1>Show</h1>}/>
      <Route path='edit' element={<h1>Edit</h1>}/>

    </Route>
  </Routes>
  </Container>
   )
    
}

export default App
