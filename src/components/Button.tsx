import React from 'react';

interface ButtonProps {
  count: number;
  onClick: () => void; // Explicitly defining the type of onClick
}

function Button({ count, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );
}

export default Button;
