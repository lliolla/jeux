import { useRef,useState } from "react";

export const MathCard = () => {
    const numberOne = Math.floor(Math.random()*20+1)
    const numberTwo = Math.floor(Math.random()*20+1)
    const inputValue = useRef()
    const [result, setResult] = useState("");

    
  const sendResult = () => {
    const userResult = parseInt(inputValue.current.value);
    console.log("userResult",userResult);
    if (!isNaN(userResult)) {
      const additionResult = numberOne + numberTwo;
      setResult(additionResult.toString());
    }

 
  };

  return (
    <div className="template-game">
       <div className="msg">
        <div className="win-msg">
            <p>Bravo !</p>
            <div className="lost-msg">
                <p>Perdu!</p>
            </div>
        </div>
       </div>
      <section className="content">
        <div className="numberOne">
          <p> {numberOne} </p>
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
       <p> result   {result}</p>
      
        <div className="user-result">
       
          <input type="text" name="user-result" ref={inputValue} placeholder="???"/>
        </div>
      <button className="button" onClick={sendResult}>Valider</button>
      </section>
    </div>
  );
};
