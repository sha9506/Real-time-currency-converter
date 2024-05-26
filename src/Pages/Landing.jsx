import React, { useEffect, useState } from "react";
import Converter from '../Assets/converter.png';

const Landing=()=>
{
    const[country, setCountry] = useState({});
    const[countryValue, setCountryValue] = useState(0);
    const[fromCurrency, setFromCurrency] = useState('');
    const[fromCountryName, setFromCountryName]=useState('');
    const[toCurrency, setToCurrency]= useState('');
    const[toCountryName, setToCountryName]=useState('');
    const[inputValue, setInputValue]=useState(0);
    


    const fetchData = async()=>{
        const code = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        const jsonCode = await code.json();
        setCountry(jsonCode);

    }

    useEffect(() =>{
        fetchData();
    },[])

    const handleConvert= async()=>
        {
         
            const number = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`);
            const jsonNumber = await number.json();
            setCountryValue(jsonNumber[fromCurrency][toCurrency]);
            console.log(jsonNumber[fromCurrency][toCurrency])
        
        }


    return(<div className="landing-box">
        <div className="heading">
            {inputValue} {fromCurrency} to {toCurrency}- Convert {fromCountryName} to {toCountryName}
        </div>
        <div className="main-box">
           <div className="convert-text"> Convert</div>
           <div className="input-container">
            <div className="flex-1">
                <div className="input-heading">Amount</div>
                <input type="number" onChange={event=>{setInputValue(event.target.value)}} className="input-full" />
            </div>
            <div className="flex-1">
                <div className="input-heading">From</div>
                <select value={fromCurrency} onChange={event=>{setFromCurrency(event.target.value);
                    setFromCountryName(country[event.target.value])}} className="input-full">
                {
                        Object.keys(country).map((key)=>
                        (
                            country[key]? <option value={key} >{country[key]}</option> : null 
                        ))
                    }
                </select>
            </div>
            <div className="circle">
                <img src={Converter} alt="converter" onClick={()=>{
                    let temp = fromCurrency;
                    setFromCurrency(toCurrency);
                    setToCurrency(temp);
                    let a = fromCountryName;
                    setFromCountryName(toCountryName);
                    setToCountryName(a);
                }} />
            </div>
            <div className="flex-1">
                <div className="input-heading">To</div>
                <select value={toCurrency} onChange={event=>{setToCurrency(event.target.value); setToCountryName(country[event.target.value])}} className="input-full">
                    {
                        Object.keys(country).map((key)=>
                        (
                            country[key]? <option value={key}>{country[key]}</option> : null 
                        ))
                    }
                
                </select>
            </div>
           </div>
           <div>
                <div className="output-text"> 
                    {inputValue} {fromCountryName} = 
                </div>
                <div className="converted-text">
                    {inputValue*countryValue} {toCountryName}
                </div>
           </div>
           <div className="button">
                 <button className="convert-button" onClick={handleConvert}>Convert Currency</button>
           </div>
        </div>

 
    </div>)
}

export default Landing;