import React from 'react'

const CardNumber = () => {
  return (
    <div className="form-row top-row">
      <div id="card-number" className="field card-number"></div>
      <div className="input-errors" id="card-number-errors" role="alert"></div>
    </div>
  )
}

export default CardNumber