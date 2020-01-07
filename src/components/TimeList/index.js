import React from 'react'

import './index.css'

export default props => (
  <div>
    { props.timeList.length > 0 ? <p>Valores anteriores</p> : ''}
    <ul>
      {
        props.timeList.map((time, index) => (
          <li className="item" key={index}>
            { time }
          </li>
        ))
      }
    </ul>
  </div>
)