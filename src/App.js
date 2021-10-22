import React, {useEffect} from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'


import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

  //with the help of redux, we are moving all the logic associated with a component into 
  //that component itself. 
  //Creating a new note and toggling importance has been moved to their own components
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes()) 
  },[dispatch]) 

    

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes  />
    </div>
  )
}

export default App