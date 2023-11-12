import React, { useState } from "react";


export default function Calculatrice() {
    let [res,setres]=useState("");

    
   const egal = () => {
    try {
      const result = eval(res);
      if (!isFinite(result)) {
        setres("Error !");
      } else {
        setres(result);
      }
    } catch (error) {
      setres("Error !");
    }
  };

  const deleteLastCharacter = () => {
    try{
      setres(prevRes => {
        if (typeof prevRes === 'string' && prevRes.length > 0) {
          return prevRes.slice(0, -1);
        }
        return prevRes;
      });
    }
    catch (error){
      setres("");
    }
  };

   const clear=()=>{
      setres("");
   };

  return (
    <div>
      <h1 style={{ color: "#8FA3FF",fontSize: "4em", fontWeight: "900", textShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)", fontFamily: "cursive",}} className="text-center mt-3 mb-5">
        Calculator
      </h1>
      <div className="container w-50  mb-5 shadow w-25 justify-content-center rounded py-4 px-1" style={{backgroundColor:"#9448F5"}}>
        
        <div className="row  mx-4   justify-content-center  mb-3 ">
          <input type="text" value={res} className="col-9 col-md-5 px-4 py-2" style={{backgroundColor: "#96ecd4e2",border:"4px solid #277088de",color:"black"}} disabled />
          <button onClick={clear} className="col-2 col-md-1 mx-1 p-3 btn shadow">C</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"%"}  onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1  blue mx-1 py-3 px-4 btn shadow">%</button>
          <button value={"/"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 py-3 px-4 btn shadow">/</button>
          <button value={"*"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 py-3 px-4 btn  shadow">*</button>
          <button onClick={deleteLastCharacter} className="col-2 col-md-1 blue mx-1 p-2 btn shadow">←</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"7"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">7</button>
          <button value={"8"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">8</button>
          <button value={"9"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">9</button>
          <button value={"-"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 p-3 btn shadow" >-</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"4"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow" >4</button>
          <button value={"5"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow" >5</button>
          <button value={"6"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow" >6</button>
          <button value={")"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 p-3 btn shadow" >  ) </button>
       
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"1"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">1</button>
          <button value={"2"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">2</button>
          <button value={"3"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">3</button>
          <button value={"("}  onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 p-3 btn shadow" > ( </button>         
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"."} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">.</button>
          <button value={"0"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 mx-1 p-3 btn shadow">0</button>
          <button value={"+"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 col-md-1 blue mx-1 p-3 btn shadow">+</button>
          <button  onClick={egal} className="col-2 col-md-1 blue mx-1 btn shadow" style={{ fontSize: "27px", color: "#FF7FAD" }}>=</button>
        </div>

      </div>
    </div>
  );
}
