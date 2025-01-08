import { useState } from 'react';

function App() {
  const [valuable, setValuble] = useState();
  const [answer, setAnswer] = useState();
  const [half, setHalf] = useState();
  const [quarter, setQuarter] = useState();
  const [nasValue, setNasValue] = useState();
  const [nasAnswer, setNasAnswer] = useState();
  const [halfNas, setHalfNas] = useState();
  const [quarterNas, setQuarterNas] = useState();

  function handleClickInput(e) {
    setValuble(e.target.value);
    setAnswer(1 / (10 * Number(e.target.value)));
    setHalf(1 / (10 * Number(e.target.value)) / 2);
    setQuarter(1 / (10 * Number(e.target.value)) / 4);
  }

  // function calculate() {
  //   setAnswer(1 / (10 * Number(valuable)));
  //   setNasAnswer((1 / (10 * Number(nasValue))) * 4);
  // }

  function handleRemove() {
    setAnswer();
    setValuble('');
  }

  function handleRemoveNas() {
    setNasAnswer();
    setNasValue();
  }

  function handleClickInputNas(e) {
    setNasValue(e.target.value);
    setNasAnswer((1 / (10 * Number(e.target.value))) * 4);
    setHalfNas(((1 / (10 * Number(e.target.value))) * 4) / 2);
    setQuarterNas(((1 / (10 * Number(e.target.value))) * 4) / 4);
  }

  const formatDecimal = (number, decimals = 2) => {
    return number
      .toFixed(decimals) // Ondalık kısmı sabitle
      .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Binlik ayracı olarak virgül ekle
  };

  return (
    <div className='calculate'>
      <h1>Risk Yönetimi</h1>
      <div className='forex'>
        <div className='group'>
          <input
            type='text'
            placeholder='FOREX'
            value={valuable}
            onChange={(e) => handleClickInput(e)}
          />
        </div>

        {answer !== undefined && answer !== Infinity && answer !== '' && (
          <div className='result'>
            <div className='yanyana'>
              <span>%1 Risk Hesap Sonucu: </span>
              <h5>{formatDecimal(answer)}</h5>
            </div>
            <div className='yanyana'>
              <span>%0.5 Risk Hesap Sonucu: </span>
              <h5>{formatDecimal(half)}</h5>
            </div>
            <div className='yanyana'>
              <span>%0.25 Risk Hesap Sonucu: </span>
              <h5>{formatDecimal(quarter)}</h5>
            </div>
          </div>
        )}
        {answer !== undefined && answer !== Infinity && answer !== '' && (
          <button className='remove' onClick={handleRemove}>
            Temizle
          </button>
        )}
      </div>
      <div className='usd100'>
        <div className='group'>
          <input
            type='text'
            placeholder='NASDAQ'
            value={nasValue}
            onChange={(e) => handleClickInputNas(e)}
          />
        </div>

        {nasAnswer !== undefined &&
          nasAnswer !== Infinity &&
          nasAnswer !== '' && (
            <div className='result'>
              <div className='yanyana'>
                <span>%1 Risk Hesap Sonucu: </span>
                <h5>{formatDecimal(nasAnswer)}</h5>
              </div>
              <div className='yanyana'>
                <span>%0.5 Risk Hesap Sonucu: </span>
                <h5>{formatDecimal(halfNas)}</h5>
              </div>
              <div className='yanyana'>
                <span>%0.25 Risk Hesap Sonucu: </span>
                <h5>{formatDecimal(quarterNas)}</h5>
              </div>
            </div>
          )}
        {nasAnswer !== undefined &&
          nasAnswer !== Infinity &&
          nasAnswer !== '' && (
            <button onClick={handleRemoveNas} className='remove'>
              Temizle
            </button>
          )}
      </div>
    </div>
  );
}

export default App;
