import BtnExit from "../components/BtnExit"

const Template = () => {
  return (
    <div className="game-container">

    <header>
     
    <h1> Jeu de Math</h1> 
    <BtnExit/>
    </header>

  <section className="score-board" >

  <p>Record a battre : </p>
  <p>Nombre tours : </p>
   {/* <button className="button" onClick={shuffleCard}>nouveau jeux</button> */}
  
  </section>
 
<section className="game-gird">
<div className="template-game">

     </div>
     </section> 
     </div>  
 )
} 

export default Template