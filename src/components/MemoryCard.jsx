const MemoryCard = ({ card, handleChoice, flipped }) => {
    const handleClick = () => {
      handleChoice(card);
    };
    return (
      <div className="card">
    <div className={`inner ${flipped ? 'flipped' : ''}`}>
      <div className="card-content">
        <div className="card-face">
          <img src={card.src} alt="" />
        </div>
        <div className="card-back" 
        onClick={handleClick}>
          <img  src="../../public/assets/images/memory/fan.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  
     
    );
  };
  
  export default MemoryCard;
  