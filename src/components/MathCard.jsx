
import { useRef, useState } from "react";

export const MathCard = () => {
    const [numberOne, setnumberOne] = useState(generateNumber(20))
    const [numberTwo, setnumberTwo] = useState(generateNumber(20))

    // const [result, setResult] = useState("");
    
    const [hideMsg, setHideMsg] = useState(true); 
    const inputValue = useRef();
    const correctAnswer =numberOne + numberTwo

    function generateNumber(max) {
    return Math.floor(Math.random() * max + 1);
    
   } 
   
   const sendResult = () => {
    const userResult = parseInt(inputValue.current.value);
   
    // setResult(correctAnswer.toString());
    
    console.log("userResult",userResult,"correctAnswer",correctAnswer)
    if(userResult===correctAnswer){
        setHideMsg(true)
        setnumberOne(generateNumber(20))
        setnumberTwo(generateNumber(20))
        console.log("good",hideMsg)
    }else{
        setHideMsg(false)
        setnumberTwo(generateNumber(20))
        setnumberOne(generateNumber(20))
        console.log("bad",hideMsg)
    }
    
//decalage entre resultta et ce qui est entré
    inputValue.current.value = ""; 
  };

  return (
    <div className="template-game">
      <h3>Trouvez le resultat du calcul suivant :</h3>
        <div className="msg">
        <div className="win-msg">
              <p>Bravo !</p>
            </div>
         
         
            <div className="lost-msg">
              <p>
                Perdu ! La bonne réponse est <span>{correctAnswer}</span>
              </p>
            </div>
      
        </div>
 
      <section className="content">
        <div className="numberOne">
          <p>{numberOne}</p>
        </div>
        <div className="sign">
          <p>+</p>
        </div>
        <div className="numberTwo">
          <p>{numberTwo}</p>
        </div>
      </section>
      <section className="content-result">
        <div className="equal">
          <p>=</p>
        </div>
        <div className="user-result">
          <input type="text" name="user-result" ref={inputValue} placeholder="???" />
        </div>
        <button className="button" onClick={sendResult}>
          Valider
        </button>
      </section>
    </div>
  );
};
