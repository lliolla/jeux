import { useState } from 'react';
import {cardArray} from '../data/memoryData'

const Memory = () => {
const cardArrayLenght = cardArray.length
const [cards, setcards] = useState([])
const [turns, setturns] = useState(0)

const shuffleCard = ()=>{
    const shuffleArray =[...cardArray,...cardArray] //  create array of pairs of images
    //sort image in the news array
    .sort(()=>Math.random()-0.5 )
    .map((card) =>({...card,id:Math.random()}))

    setcards(shuffleArray)
    setturns(0)
    }   
console.log("shuffleArray",cards,turns);
    /* gird memomry */
           /* card component */
          /* match card fonction */
           /* flip card with css */
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
         {
            cards.map(card => (
                <div className="card" key ={card.id} >
                    <div className='card-face'>
                        <img src={card.src} alt="" />
                    </div>
                </div>
            ))
         }
        </section>
          

          
        </div>
    );
};

export default Memory;