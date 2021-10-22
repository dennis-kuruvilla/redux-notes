import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch() //The useDispatch hook provides any React component access
  //  to the dispatch function of the redux store defined in index.js. This allows all 
  //  components to make changes to the state of the redux store.
  

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(createNote(content))  // with th use of useDispatch() (part of react-redux), 
    //we can write dispatch() instead of store.dispatch()
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote