// src/components/Counter.tsx
"use client"

import React, { useState } from 'react';

interface CounterProps {
  initial: number;
}

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initial);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border max-w-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        React Counter
      </h2>
      
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-blue-600">
          {count}
        </span>
      </div>
      
      <div className="flex gap-2 justify-center mb-4">
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        
        <button 
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={reset}
        className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Reset to {initial}
      </button>
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Initial value: {initial}</p>
        <p>Current value: {count}</p>
        <p>Difference: {count - initial}</p>
      </div>
    </div>
  );
}