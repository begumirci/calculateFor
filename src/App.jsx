import { useState } from 'react';

function App() {
  const [valuable, setValuble] = useState();
  const [answer, setAnswer] = useState();

  function handleClickInput(e) {
    setValuble(e.target.value);
    setAnswer(1 / (10 * Number(e.target.value)));
    console.log(answer);
  }

  function calculate() {
    setAnswer(1 / (10 * Number(valuable)));
  }

  function handleRemove() {
    setAnswer('');
    setValuble('');
  }

  return (
    <div className='calculate'>
      <div className='group'>
        <input
          type='text'
          placeholder='Değişken gir'
          value={valuable}
          onChange={(e) => handleClickInput(e)}
        />
        <button onClick={calculate}>Hesapla</button>
      </div>

      {answer !== undefined && answer !== Infinity && answer !== '' && (
        <div className='result'>
          <span>Hesap Sonucu: </span>
          <h5>{answer}</h5>
        </div>
      )}
      {answer !== undefined && answer !== Infinity && answer !== '' && (
        <button onClick={handleRemove}>Temizle</button>
      )}
    </div>
  );
}

export default App;
