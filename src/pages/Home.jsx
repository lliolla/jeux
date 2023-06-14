import { gameData } from "../data/gameData";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
       <main>
        <h1>MENU</h1>
        <div className="card-content">
            <div className="card-img">image</div>
            <div className="title">Jeux de memory</div>
            <div className="text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab quae facilis, ea obcaecati quaerat voluptatibus harum ratione quidem quisquam voluptas excepturi repudiandae in debitis fugiat soluta minus nostrum consequuntur? </div>
            <div className="level">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5"></span>
            </div>
        </div>
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