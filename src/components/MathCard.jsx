import { useRef, useState } from "react";

export const MathCard = () => {
  const miniNb = 10;
  const [numberOne, setnumberOne] = useState(generateNumber(miniNb));
  const [numberTwo, setnumberTwo] = useState(generateNumber(miniNb));

  // const [result, setResult] = useState("");

  const [hideMsg, setHideMsg] = useState(false);
  const [hideMsgWin, sethideMsgWin] = useState(false);
  const [hideMsgLost, sethideMsgLost] = useState(false);

  const inputValue = useRef();
  const correctAnswer = numberOne + numberTwo;

  function generateNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }

  const sendResult = () => {
    const userResult = parseInt(inputValue.current.value);

    // setResult(correctAnswer.toString());

    console.log("userResult", userResult, "correctAnswer", correctAnswer);
    if (userResult === correctAnswer) {
      setHideMsg(true);
      sethideMsgWin(true);
      sethideMsgLost(false);
      setnumberOne(generateNumber(miniNb));
      setnumberTwo(generateNumber(miniNb));
      console.log("good", hideMsgWin, hideMsgLost);
    } else {
      setHideMsg(true);
      sethideMsgWin(false);
      sethideMsgLost(true);
      setnumberTwo(generateNumber(miniNb));
      setnumberOne(generateNumber(miniNb));
      console.log("good", hideMsgWin, hideMsgLost);
    }
    inputValue.current.value = "";
    setTimeout(() => {
      setHideMsg(false);
    }, 1500);
  };

  return (
    <div className="template-game">
      <div className="math-game">
      <h3>Trouvez le resultat du calcul suivant :</h3>
        {hideMsg && (
          <section className="msg">
            {hideMsgWin ? (
              <div className="win-msg">
                <p>Bravo !</p>
              </div>
            ) : (
              <div className="lost-msg">
                <p>
                  Perdu ! La bonne réponse est <span>{correctAnswer}</span>
                </p>
              </div>
            )}
          </section>
        )}
     
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
            <input
              type="text"
              name="user-result"
              ref={inputValue}
              placeholder="???"
            />
          </div>
          <button className="button" onClick={sendResult}>
            Valider
          </button>
        </section>
      </div>
    </div>
  );
};
