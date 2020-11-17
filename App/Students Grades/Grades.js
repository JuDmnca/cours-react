import React from 'react'

function Sidebar({grades}) {
  return (
    <div className="Sidebar">
      <ul className="list-group list-group-flush d-flex flex-wrap flex-row">
        {grades.map((grade, i) =>(
          <li className="list-group-item p-0 pb-3" style={{width: '15rem', borderWidth: '0'}} key={i}>
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{grade}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar