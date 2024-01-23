import React from 'react'
import phrases from '../utils/phrases.json';
import randomIndex  from '../services/randomindex';

const Buttonphrase = ({setQuote}) => { 
    const sentence = randomIndex(phrases);
    const handleButton =() =>{
        setQuote(sentence);
    }
  return (
    <button onClick ={handleButton}>Probar mi suerte</button>
  )
}

export default Buttonphrase;