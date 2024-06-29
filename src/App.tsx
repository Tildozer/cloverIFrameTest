// import { useState } from 'react';
import './App.css'

function App() {
  // const [price, setPrice] = useState(100)
  const clover = new Clover('75f1cf0597247715894bda808608ec28', {
    merchantId: 'RCTSTAVI0010002'
  }
  );
  const elements = clover.elements();
  const cardNumber = elements.create('CARD_NUMBER');
  const cardDate = elements.create('CARD_DATE');
  const cardCvv = elements.create('CARD_CVV');
  const cardPostalCode = elements.create('CARD_POSTAL_CODE');
  
  cardNumber.mount('#card-number');
  cardDate.mount('#card-date');
  cardCvv.mount('#card-cvv');
  cardPostalCode.mount('#card-postal-code');
  return (
    <form action="/charge" method="post" id="payment-form">
      <div className="form-row top-row">
        <div id="amount" className="field card-number">
          <input name="amount" placeholder="Amount"/>
        </div>
      </div>
      <div className="form-row top-row">
        <div id="card-number" className="field card-number"></div>
        <div className="input-errors" id="card-number-errors" role="alert"></div>
      </div>
      <div className="form-row">
        <div id="card-date" className="field third-width"></div>
        <div className="input-errors" id="card-date-errors" role="alert"></div>
      </div>
  
      <div className="form-row">
        <div id="card-cvv" className="field third-width"></div>
        <div className="input-errors" id="card-cvv-errors" role="alert"></div>
      </div>
    
      <div className="form-row">
        <div id="card-postal-code" className="field third-width"></div>
        <div className="input-errors" id="card-postal-code-errors" role="alert"></div>
      </div>  
      <div id="card-response" role="alert"></div>
      <div className="button-container">
        <button>Submit Payment</button>
      </div>
    </form>
  )
}

export default App
