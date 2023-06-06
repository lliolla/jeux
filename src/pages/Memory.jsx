import { useState,useEffect } from 'react';
import {cardArray} from '../data/memoryData'
import MemoryCard from '../components/MemoryCard';
import BtnExit from '../components/BtnExit';

const Memory = () => {
const [cards, setcards] = useState([])
const [turns, setturns] = useState(0)
const [prevTurns, setPrevTurns] = useState(0);
const [choiceOne, setchoiceOne] = useState(0)
const [choiceTwo, setchoiceTwo] = useState(0)
const [disabled, setdisabled] = useState(false)
const [gameWon, setGameWon] = useState(false)


//Know if all card are return
useEffect(() => {
    if (cards.every(card => card.matched)) {
      setGameWon(true);
 setTimeout(() => {
    setGameWon(false);
    shuffleCard()

 }, 2000);
    }
  }, [cards]);

// start new game   automatically
useEffect(() => {
shuffleCard()

}, [])

const shuffleCard = ()=>{
    const shuffleArray =[...cardArray,...cardArray] //  create array of pairs of images
    //sort image in the news array
    .sort(()=>Math.random()-0.5 )
    .map((card) =>({...card,id:Math.random()}))
    setchoiceOne(null)
    setchoiceTwo(null)
    setPrevTurns(turns);
    setcards(shuffleArray)
    setturns(0)
    setGameWon(false);
    }   
const handleChoice=(card)=>{
console.log("card",card);
choiceOne ? setchoiceTwo(card) :setchoiceOne(card)
console.log("choiceOne",choiceOne,"choiceTwo",choiceTwo)
}
// compare two selected card
useEffect(() => {
  if(choiceOne && choiceTwo){
    setdisabled(true)
    
    if(choiceOne.src === choiceTwo.src){
        setcards(prevCards =>{
            return prevCards.map(card=>{
                if(card.src === choiceOne.src){
                    return {...card, matched:true}
                }else{
                    return card
                }
            })
        })
        resetTurns()
    }else{
        //wait a moment beforer reset choice 2
     setTimeout(()=> resetTurns(),1000)
        
    }
  }

 
}, [choiceOne,choiceTwo])
console.log("setdisabled",disabled);


//reset choices and increase turn
 const resetTurns =()=>{
    setchoiceOne(null)
    setchoiceTwo(null)
    setturns(prevTurns=> prevTurns+1 )
    setdisabled(false)
 } 
    return (
        <div className="game-container">

            <header>
            <h1> Jeu de memory</h1> 
            <BtnExit />
            </header>
           
          <section className="score-board" >
          <div className="previous-turns">
          <p>Record a battre : {prevTurns} </p>
        </div>
          <p>Nombre tours : {turns}</p>
           <button className="button" onClick={shuffleCard}>nouveau jeux</button>
          
          </section>
          { gameWon &&( <div className="win-game">
                <p>Bravo la partie est terminée</p>
            </div> )
          }
        <section className="game-gird">
        <div className="template-game">
         {
            cards.map(card => (
                <MemoryCard 
                key={card.id} 
                card = {card}
                handleChoice ={handleChoice}
                flipped={card === choiceOne || card ===choiceTwo || card.matched}
                disabled ={disabled}
                />
            ))
         }
             </div>
        </section>
          

          
        </div>
    );
};

export default Memory;