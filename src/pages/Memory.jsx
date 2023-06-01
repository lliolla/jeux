import { useState,useEffect } from 'react';
import {cardArray} from '../data/memoryData'
import MemoryCard from '../components/MemoryCard';

const Memory = () => {
const cardArrayLenght = cardArray.length
const [cards, setcards] = useState([])
const [turns, setturns] = useState(0)
const [choiceOne, setchoiceOne] = useState(0)
const [choiceTwo, setchoiceTwo] = useState(0)


const shuffleCard = ()=>{
    const shuffleArray =[...cardArray,...cardArray] //  create array of pairs of images
    //sort image in the news array
    .sort(()=>Math.random()-0.5 )
    .map((card) =>({...card,id:Math.random()}))

    setcards(shuffleArray)
    setturns(0)
    }   
const handleChoice=(card)=>{
console.log("card",card);
choiceOne ? setchoiceTwo(card) :setchoiceOne(card)
console.log("choiceOne",choiceOne,"choiceTwo",choiceTwo)
}
// compare two selected card
useEffect(() => {
  if(choiceOne && choiceTwo){
    if(choiceOne.src === choiceTwo.src){
        console.log("matched");
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

console.log('card',cards)

//reset choices and increase turn
 const resetTurns =()=>{
    setchoiceOne(null)
    setchoiceTwo(null)
    setturns(prevTurns=> prevTurns+1 )
 } 
    return (
        <div className="game-container">

            <header>
            <h1> Jeu de memory</h1> 
            </header>
          <section className="score-board" >
          <p>score :</p>
          <p>nombre de coup </p>
          <p>Memory lenght :  
           {cardArrayLenght}</p>
           <button className="button" onClick={shuffleCard}>nouveau jeux</button>

          </section>
        <section className="game-gird">
        <div className="memory-game">
         {
            cards.map(card => (
                <MemoryCard 
                key={card.id} 
                card = {card}
                handleChoice ={handleChoice}
                flipped={card === choiceOne || card ===choiceTwo || card.matched}
                />
            ))
         }
             </div>
        </section>
          

          
        </div>
    );
};

export default Memory;