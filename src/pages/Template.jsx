const Template = () => {
  return (
    <div className="game-container">

    <header>
        {/* ramener le nom du jeu au click sur le bouton dans home */}
    <h1> Jeu de memory</h1> 

    </header>
    voir
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
<div className="memory-game">
{/* div au nom du jeu et inseryion du composant en fonction du nom du jeu */}
     </div>
</section>
  

  
    </div>
  )
}

export default Template