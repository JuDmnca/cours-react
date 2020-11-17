import React, { useReducer } from 'react'
import Grades from './Grades.js'

const initialState = {
  grades: [],
  max: 10,
  message: "" ,
  grade: "",
  stop: false,
  average: 0,
  count: 0
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'add':
      const newGrade = parseInt(action.value)

      if (action.value == "") return { ...state, grade: "" }

      if ( isNaN(newGrade) ) return { ...state, message: 'Error : this grade is not an integer.' }

      return {
        ...state, grade: newGrade
      }

    case 'push':
      const grades = [ ...state.grades ]
      let stop = false

      if( state.grade == "" ) return { ...state }

      grades.push(state.grade)
      const totalGrades = grades.length
      let total = 0;
      for( let i = 0; i < totalGrades; i++ ){
          total += parseInt( grades[i] )
      }

      if (totalGrades == state.max) {
        stop = true
      }

      return {
        ...state,
        count: totalGrades,
        grades: grades,
        stop: stop,
        grade: "",
        average: Math.round(total / totalGrades, 1),
      }
    case 'reset':
      return { ...state, ...initialState }

    default:
      return { ...state }
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: 'add', value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'push' })
  }

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <div className="container-fluid p-0">
      <div className="jumbotron text-center bg-primary text-light">
        <h1>Student grades panel </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Add new grades :</h2>
            {state.message && <p className="alert alert-primary">{state.message}</p>}
            {state.stop &&<p>There are {state.count} grades which is the maximum. Reset grades if you want to add new ones.</p>}
            {!state.stop &&
            <form onSubmit={handleSubmit}>
              <p>There are {state.count} grades.</p>
              <div className="search form-group">
                <input className="form-control" type="text" name="grade" value={state.grade} onChange={handleChange} />
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
            }
          </div>
          <div className="col-6">
            <h2>Student grades :</h2>
            {<p>Student average grade : {state.average}</p>}
            {state.count > 0 &&
              <div className="search form-group">
                <Grades grades={state.grades} />
                <button className="btn btn-primary" onClick={() => handleReset()}>Reset</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form