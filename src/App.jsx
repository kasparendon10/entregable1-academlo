
import { useState } from 'react';
import './App.css';
import RandomPhrase from './components/RandomPhrase';
import randomIndex  from './services/randomindex';
import  phrases from './utils/phrases.json';
import Buttonphrase from './components/Buttonphrase';


function App() {
   const sentence = randomIndex(phrases);
   const [quote,  setQuote] = useState(sentence);
  return (
   <div className='container'>
      <h1>Galletas de la fortuna</h1>
      <Buttonphrase
      setQuote = {setQuote}/>
      <RandomPhrase 
      quote = {quote} />
 
   </div>
   
  )
} 

export default App;
