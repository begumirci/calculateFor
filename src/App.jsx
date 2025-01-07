import { useState } from 'react';

function App() {
  const [valuable, setValuble] = useState();
  const [answer, setAnswer] = useState();

  function calculate() {
    setAnswer(1 / (10 * Number(valuable)));
  }

  return (
    <div className='calculate'>
      <div className='group'>
        <input
          type='text'
          placeholder='değişken gir'
          onChange={(e) => setValuble(e.target.value)}
        />
        <button onClick={calculate}>Hesapla</button>
      </div>

      <div className='result'>
        <span>Hesap Sonucu: </span>
        <h5>{answer}</h5>
      </div>
    </div>
  );
}

export default App;
