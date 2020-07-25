import React, { useState } from 'react';
import './App.css';

function App() {

  const [tabela, setTabela] = useState([]);
  const [input, setInput] = useState([0]);
  const [erro, setErro] = useState("");
  
  let lista = [];
  let valor = 0;

  function _calcular(){

    if(input <= 0){
      setErro("Número Inválido!")
      return;
    }

    setTabela([]);
    setErro("");
    
    for(let i=1; i<11; i++){
      valor = input * i;
      lista.push({fator1: input, fator2: i,  produto: valor});
    }  

    setTabela(lista);
    setInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="box-input">
          <h1>CACULADORA DE TABUADAS</h1>
          <input
            type="number"
            value={input}
            onChange={ e => setInput(e.target.value) }
          />
          <span className="erro">{ erro }</span>
          <button onClick={ () => _calcular() }> CALCULAR </button>
        </div>
        
        <div className="resultado">
          {
            tabela.length === 0 ? <h4>Digite um número no campo acima para obter sua tabuada!</h4> : tabela.map((numero, index) => (
              <p key={index}>
                {numero.fator1} x {numero.fator2} = {numero.produto}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
