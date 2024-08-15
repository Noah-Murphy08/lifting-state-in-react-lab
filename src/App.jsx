import { useState } from 'react';

import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])

  const handleAddToBurger = (ingredient) => {
    event.preventDefault()
    setStack([...stack, ingredient])
  }

  const handleRemoveFromBurger = (ingredient) => {
    event.preventDefault()
    const index = stack.findIndex((item) => item.name === ingredient.name)
    if (index !== -1) {
      const newStack = [...stack.slice(0, index), ...stack.slice(index + 1)]
      setStack(newStack)
    }
  }

  return (
    <main>
      <h1>Burger Stacker</h1>

      <section>
        <IngredientList ingredients={availableIngredients} handleAddToBurger={handleAddToBurger}/>
        <BurgerStack stack={stack} handleRemoveFromBurger={handleRemoveFromBurger}/>
      </section>
    </main>
  );
};

export default App;
