import { useEffect } from "react";

export default function useScrollAnimation(x1Img, x2Img, rectImg, lastScrollPosition, setLastScrollPosition){
    useEffect(() => {
        const scrollListen = window.addEventListener("scroll", () => {
          const scrollPosition = window.scrollY;
    
          const rotationAngle = scrollPosition * 0.15;
          const scrollDirection =
            scrollPosition > lastScrollPosition ? "down" : "up";
          if (!x1Img.current || !x2Img.current || !rectImg.current) return;
          if (scrollDirection === "down") {
            x1Img.current.style.transform = `rotate(-${rotationAngle}deg)`;
            x2Img.current.style.transform = `rotate(-${rotationAngle}deg)`;
            rectImg.current.style.transform = `rotate(-${rotationAngle}deg)`;
          } else {
            x1Img.current.style.transform = `rotate(${rotationAngle}deg)`;
            x2Img.current.style.transform = `rotate(${rotationAngle}deg)`;
            rectImg.current.style.transform = `rotate(${rotationAngle}deg)`;
          }
    
          setLastScrollPosition(scrollPosition);
        });
        return () => {
          document.removeEventListener("scroll", scrollListen);
        };
      }, []);
}