import { NavLink } from "react-router-dom"

const BtnExit = () => {
  return (
    <div>

 <NavLink 
        to={"/"}
        className="button"
        >
            Retour
        </NavLink> 

        
     
       
    </div>
  )
}

export default BtnExit