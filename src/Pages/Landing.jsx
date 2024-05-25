import React, { useEffect, useState } from "react";

const Landing=()=>
{
    const[country, setCountry] = useState({});

    useEffect(() =>{
        const fetchData = async()=>{
            const result = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
            const jsonResult = await result.json();
            console.log(jsonResult);
            setCountry(jsonResult);
        }

        fetchData();
    },[])



    return(<div className="landing-box">
        <div className="heading">
            1,223 USD to CAD- Convert US Dollars to Canadian Dollars
        </div>
        <div className="main-box">
           <div className="convert-text"> Convert</div>
           <div className="input-container">
            <div className="flex-1">
                <div className="input-heading">Amount</div>
                <input type="number" className="input-full" />
            </div>
            <div className="flex-1">
                <div className="input-heading">From</div>
                <select name="" id="" className="input-full">
                    <option value="India"> India</option>
                    <option value="India"> India</option>
                    <option value="India"> India</option>
                </select>
            </div>
            <div className="circle">
                ---
            </div>
            <div className="flex-1">
                <div className="input-heading">To</div>
                <select name="" id="" className="input-full">
                    <option value="India"> India</option>
                    <option value="India"> India</option>
                    <option value="India"> India</option>
                </select>
            </div>
           </div>
           <div>
                <div className="output-text"> 
                    1,223.00 US Dollars = 
                </div>
                <div className="converted-text">
                    1,671.3685 Canadian Dollars
                </div>
           </div>
           <div className="button">
                 <button className="convert-button">Convert Currency</button>
           </div>
        </div>
        
        <div> 
            {/* {
            Object.keys(country.object).map((key, i) => (
                <ul key={i}>
                    {key}:{country.object[key]}
                </ul>
             ))
         } */}
        </div>

    </div>)
}

export default Landing;