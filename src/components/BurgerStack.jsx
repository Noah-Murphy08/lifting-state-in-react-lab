// `src/components/BurgerStack.jsx`

import { useState } from "react";




const BurgerStack = (props) => {
    

    return (
        <ul>
            {props.stack.map((ingredient, idx) => (
                <li key={idx} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => props.handleRemoveFromBurger(ingredient)} type="submit">X</button>
                </li>
            ))}
        </ul>
    )
  };
  
  export default BurgerStack;
  