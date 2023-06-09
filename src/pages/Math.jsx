import BtnExit from "../components/BtnExit";
import { MathCard } from "../components/MathCard";

const Math = () => {

  const newGame = () => {
    console.log("newGame");
  };

  return (
    <div className="game-container">
      <header>
        <h1> Jeu de Math</h1>
        <BtnExit />
      </header>

      <section className="score-board">
        
        <div className="score-board-timer">
          <span> 00 : 00 </span>
        </div>
        <p>perdu : </p>
        <p>gagné : </p>
        <p>Record a battre :  </p>
        <p>Nombre tours :  </p>
        <button className="button" onClick={newGame}>
          nouveau jeux
        </button>
      </section>

      <section className="game-gird">
        <MathCard />
      </section>
    </div>
  );
};

export default Math;
