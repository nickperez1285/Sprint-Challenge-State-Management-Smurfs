import React, { Component, useState, useEffect  } from "react";
import "./App.css";
import {SmurfListObj} from "../contexts/SmurfListObj";
import SmurfList from "./SmurfList"
import axios from 'axios';
import Form from "./Form"



const App =  () => {

const [list, setList] = useState([])


useEffect(()=>{ 
 axios.get("http://localhost:3333/smurfs")
    .then(res =>{
      const smurfs = res.data
      setList(smurfs)
          } 
      )
    .catch(err =>{
      console.log(err)
    })}, 

    [list])



  
  

    return (
      <SmurfListObj.Provider value = {{list}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
        <Form /> 
      </div>
     </SmurfListObj.Provider>

    );


  }


export default App;
