import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    
    if (!text) return; // Don't try to type if there's no text

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(typingInterval); // Clear interval when typing is complete
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;

