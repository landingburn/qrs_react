import React, { RefObject, createContext } from 'react';

interface ScrollContextType {
  refA: RefObject<HTMLElement>;
  refB: RefObject<HTMLElement>;
  // Add more refs as needed
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export default ScrollContext;
