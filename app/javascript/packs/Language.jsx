// Reactをインポートしてください
import React from 'react';
import ReactDOM from 'react-dom'

const Language = (props) => {
  // Übergeben "props" mit Daten als Argument
      return(
          <div className='card m-3'>
            <div className="card-body">
          <div className="language-name">{props.name}</div>
          <img
          className='language-image'
          src={props.image}
          />

          </div>
          </div>
      )
  }

export default Language;




