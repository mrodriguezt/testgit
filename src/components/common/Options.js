import React, { useState } from "react";

const Options = ({ buttons, icons, onClick }) => {
  const [clickedId, setClickedId] = useState(-1)

  const handleClick = ( i ) => {
    onClick(i)
    setClickedId(i)
  } 

  return (
    <div className="options-container">
      {buttons.map((buttonLabel, i) => (
        <div className= {i === clickedId ? 'option active mr-2 py-auto' : 'option mr-2 py-auto'} 
          key={i} name={buttonLabel} onClick={() => handleClick(i)}>
          
          
          
          <span className='d-flex title4'>

            {icons[i] && (
            <img src={ '/images/icons/'+icons[i] } className="d-block mr-2"/>
            )}

            { buttonLabel } 
            
          </span>
        </div>  
      ))}
    </div> 
  );
};

export default Options