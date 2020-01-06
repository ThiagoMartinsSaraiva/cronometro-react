import React from 'react'

import './index.css'

export default props => (
  <span>
    <button className="button" onClick={props.handleClick} disabled={props.disabled}>{ props.children }</button>
  </span>
)