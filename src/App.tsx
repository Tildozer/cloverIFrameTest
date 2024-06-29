// import { useState } from 'react';
import { useEffect } from 'react';
import { AmountForm, CardNumber, CVV, ExpirationDate, PostalCode } from './components/';

function App() {
  // const [price, setPrice] = useState(100)
  const clover = new Clover('75f1cf0597247715894bda808608ec28', {
    merchantId: 'CJK9CRFTWRN31'
  }
  );
  const elements = clover.elements();
  const cardNumber = elements.create('CARD_NUMBER');
  const cardDate = elements.create('CARD_DATE');
  const cardCvv = elements.create('CARD_CVV');
  const cardPostalCode = elements.create('CARD_POSTAL_CODE');
  
  // const cardResponse = document.getElementById('card-response');
  // const displayCardNumberError = document.getElementById('card-number-errors');
  // const displayCardDateError = document.getElementById('card-date-errors');
  // const displayCardCvvError = document.getElementById('card-cvv-errors');
  // const displayCardPostalCodeError = document.getElementById('card-postal-code-errors');

  // Handle real-time validation errors from the card element
  cardNumber.addEventListener('change', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardNumber changed ${JSON.stringify(ev)}`);
  });
  
  cardNumber.addEventListener('blur', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardNumber blur ${JSON.stringify(ev)}`);
  });
  
  cardDate.addEventListener('change', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardDate changed ${JSON.stringify(ev)}`);
  });
  
  cardDate.addEventListener('blur', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardDate blur ${JSON.stringify(ev)}`);
  });
  
  cardCvv.addEventListener('change', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardCvv changed ${JSON.stringify(ev)}`);
  });
  
  cardCvv.addEventListener('blur', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardCvv blur ${JSON.stringify(ev)}`);
  });
  
  cardPostalCode.addEventListener('change', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardPostalCode changed ${JSON.stringify(ev)}`);
  });
  
  cardPostalCode.addEventListener('blur', function(ev: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cardPostalCode blur ${JSON.stringify(ev)}`);
  });
  useEffect(() => {
    cardNumber.mount('#card-number');
    cardDate.mount('#card-date');
    cardCvv.mount('#card-cvv');
    cardPostalCode.mount('#card-postal-code');
  }, [])
  
  return (
      <form action="/charge" method="post" id="payment-form">
        <AmountForm />
        <CardNumber />
        <ExpirationDate />
        <CVV />
        <PostalCode />
        <div id="card-response" role="alert"></div>
        <div className="button-container">
          <button>Submit Payment</button>
        </div>
      </form>
  )
}

export default App
