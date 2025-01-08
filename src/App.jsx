import { useState } from 'react';

function App() {
  const [valuable, setValuble] = useState();
  const [answer, setAnswer] = useState();
  const [nasValue, setNasValue] = useState();
  const [nasAnswer, setNasAnswer] = useState();

  function handleClickInput(e) {
    setValuble(e.target.value);
    setAnswer(1 / (10 * Number(e.target.value)));
  }

  function calculate() {
    setAnswer(1 / (10 * Number(valuable)));
    setNasAnswer((1 / (10 * Number(nasValue))) * 4);
  }

  function handleRemove() {
    setAnswer();
    setValuble();
  }

  function handleRemoveNas() {
    setNasAnswer();
    setNasValue();
  }

  function handleClickInputNas(e) {
    setNasValue(e.target.value);
    setNasAnswer((1 / (10 * Number(e.target.value))) * 4);
  }

  return (
    <div className='calculate'>
      <div>
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
      <div>
        <div className='group'>
          <input
            type='text'
            placeholder='USD100'
            value={nasValue}
            onChange={(e) => handleClickInputNas(e)}
          />

          <button onClick={calculate}>Hesapla</button>
        </div>

        {nasAnswer !== undefined &&
          nasAnswer !== Infinity &&
          nasAnswer !== '' && (
            <div className='result'>
              <span>Hesap Sonucu: </span>
              <h5>{nasAnswer}</h5>
            </div>
          )}
        {nasAnswer !== undefined &&
          nasAnswer !== Infinity &&
          nasAnswer !== '' && (
            <button onClick={handleRemoveNas}>Temizle</button>
          )}
      </div>
    </div>
  );
}

export default App;
