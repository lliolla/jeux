
import { useRef, useState } from "react";

export const MathCard = () => {
    const numberOne = generateNumber(20);
    const numberTwo =  generateNumber(20);
    const [result, setResult] = useState("");
    const [hideMsg, setHideMsg] = useState(true); 
    const inputValue = useRef();

    function generateNumber(max) {
    return Math.floor(Math.random() * max + 1);
   } 
   


  

   const sendResult = () => {
    const userResult = parseInt(inputValue.current.value);
    const correctAnswer =numberOne + numberTwo
    setResult(correctAnswer.toString());
    
    console.log("userResult",userResult,result)
    
//decalage entre resultta et ce qui est entré
    inputValue.current.value = ""; 
  };

  return (
    <div className="template-game">
      
        <div className="msg">
         
            <div className="win-msg">
              <p>Bravo !</p>
            </div>
        
            <div className="lost-msg">
              <p>
                Perdu ! La bonne réponse est <span>{result}</span>
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
