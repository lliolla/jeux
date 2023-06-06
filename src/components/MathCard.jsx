export const MathCard = () => {
    const numberOne = 1
    const numberTwo = 9
    const operation =(num1,num2)=>{
        return num1 + num2
    }
    const result =operation(numberOne,numberTwo)
 
  return (
    <div>
      <section className="content">
        <div className="numberOne">
          <p> {numberOne} </p>
        </div>
        <div className="sign">+</div>
        <div className="numberTwo">
          <p>{numberTwo}</p>
        </div>
      </section>
      <section className="content-result">
        <div className="equal">=</div>
        result   {result}
        <div className="user-result">
        
          <input type="text" name="user-result" id="user-result" />
        </div>
      </section>
    </div>
  );
};
