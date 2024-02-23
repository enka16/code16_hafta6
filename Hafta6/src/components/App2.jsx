import React, { useState } from 'react';


function App2() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [result, setResult] = useState('');
  const [seasonImage, setSeasonImage] = useState('');
  const [seasonName, setSeasonName] = useState('');

  const convertTemperature = () => {
    const temperatureValue = parseFloat(temperature);

    if (!isNaN(temperatureValue)) {
      if (unit === 'celsius') {
        const fahrenheitValue = (temperatureValue * 9/5) + 32;
        const kelvinValue = temperatureValue + 273.15;
        setResult(`${temperatureValue} Celsius = ${fahrenheitValue.toFixed(2)} Fahrenheit = ${kelvinValue.toFixed(2)} Kelvin`);

        // Mevsim resmi ve ismi belirleme
        setSeasonInfo(temperatureValue);
      } else if (unit === 'fahrenheit') {
        const celsiusValue = (temperatureValue - 32) * 5/9;
        const kelvinValue = (temperatureValue - 32) * 5/9 + 273.15;
        setResult(`${temperatureValue} Fahrenheit = ${celsiusValue.toFixed(2)} Celsius = ${kelvinValue.toFixed(2)} Kelvin`);

        // Mevsim resmi ve ismi belirleme
        setSeasonInfo(celsiusValue);
      } else if (unit === 'kelvin') {
        const celsiusValue = temperatureValue - 273.15;
        const fahrenheitValue = (temperatureValue - 273.15) * 9/5 + 32;
        setResult(`${temperatureValue} Kelvin = ${celsiusValue.toFixed(2)} Celsius = ${fahrenheitValue.toFixed(2)} Fahrenheit`);

        // Mevsim resmi ve ismi belirleme
        setSeasonInfo(celsiusValue);
      }
    } else {
      setResult('Lütfen geçerli bir sayı girin.');
      setSeasonImage('');
      setSeasonName('');
    }
  };

  const setSeasonInfo = (celsius) => {
    if (celsius >= 30) {
      setSeasonImage('https://www.bizimaile.com/wp-content/uploads/2018/07/shutterstock_644740495.jpg');
      setSeasonName('Yaz');
    } else if (celsius >= 10) {
      setSeasonImage('https://cdn.hellovillam.com/HelloVillam/images/w596/2021-03/ilkbaharrr11_fw898ad4qrxu3cb1vlr2q2aik46odx_XATH40O3PNOR4DM6BTQ5XB9GQIWD95.jpg');
      setSeasonName('İlkbahar');
    } else if (celsius >= 0) {
      setSeasonImage('https://ichef.bbci.co.uk/news/640/cpsprodpb/16DA5/production/_98250639_gettyimages-583825182.jpg');
      setSeasonName('Sonbahar');
    } else {
      setSeasonImage('https://www.tarim.com.tr/upload/galeriler/828/kar_agaclar_kis_mevsimi_manzarasi_4f40549f-85ab-4cea-b80a-d358e8192bad.jpg');
      setSeasonName('Kış');
    }
  };

  return (
    <div className="App">
      <h2>Sıcaklık Dönüştürücü</h2>

      <label htmlFor="temperature">Sıcaklık:</label>
      <input 
        type="number" 
        id="temperature" 
        value={temperature} 
        onChange={(e) => setTemperature(e.target.value)} 
        placeholder="Sıcaklık" 
      />

      <br />

      <label>
        <input 
          type="radio" 
          name="unit" 
          value="celsius" 
          checked={unit === 'celsius'} 
          onChange={() => setUnit('celsius')} 
        />
        Celsius
      </label>

      <label>
        <input 
          type="radio" 
          name="unit" 
          value="fahrenheit" 
          checked={unit === 'fahrenheit'} 
          onChange={() => setUnit('fahrenheit')} 
        />
        Fahrenheit
      </label>

      <label>
        <input 
          type="radio" 
          name="unit" 
          value="kelvin" 
          checked={unit === 'kelvin'} 
          onChange={() => setUnit('kelvin')} 
        />
        Kelvin
      </label>

      <br />

      <button onClick={convertTemperature}>Dönüştür</button>

      <br />

      <h3 style={{color:"white",textShadow:"2px 2px 4px #000000"}}>{result}</h3>

      {seasonImage && (
        <div>
          <h3 style={{color:"white",textShadow:"2px 2px 4px #000000"}}>{seasonName}</h3>
          <img 
            src={seasonImage} 
            alt="Season" 
            style={{ maxWidth: '100%',width:"600px",height:"300px",border:"5px solid white" }} 
          />
        </div>
      )}
      <hr />
    </div>
  );
}
//Enes Kaya
export default App2;
