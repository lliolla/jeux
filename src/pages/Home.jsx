import { gameData } from "../data/gameData";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
       <main>
        <h1>Choisir un jeux</h1>
        <div className="game-gird">
       {
         gameData.map((game)=>
         <div className="game-gird_item" key={game.id}>
           <NavLink 
           to={game.link}
           className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
           >  {game.title}
           </NavLink>
          
         </div>
         )
       }
        </div>
       </main>
    );
};

export default Home;