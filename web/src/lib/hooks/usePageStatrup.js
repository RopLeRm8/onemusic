import { useEffect } from "react";


export function useFadeTextOnLoad(typingText){
    const NEWWORD = "одним свайпом";
    const WORDSDELAY = 60;
    const INITIALDELAY = 2000;
    const DELAYAFTERERASE = 0;
  
    useEffect(() => {
      let isTyping = false;
  
      const typingEffectElement = typingText.current;
      const initialWord = typingEffectElement.textContent;
      let charIndex = initialWord.length;
  
      function type() {
        typingEffectElement.classList.add("applyFadeReverse");
        if (charIndex < NEWWORD.length && isTyping) {
          typingEffectElement.textContent += NEWWORD.charAt(charIndex);
          charIndex++;
          setTimeout(type, WORDSDELAY);
        }
      }
  
      function erase() {
        if (charIndex >= 0 && !isTyping) {
          typingEffectElement.textContent = initialWord.substring(0, charIndex);
          charIndex--;
          setTimeout(erase, WORDSDELAY);
        } else {
          charIndex = 0;
          isTyping = true;
          setTimeout(type, DELAYAFTERERASE);
        }
      }
      setTimeout(() => {
        erase();
        typingEffectElement.classList.add("applyFade");
      }, INITIALDELAY);
    }, [typingText]);
}