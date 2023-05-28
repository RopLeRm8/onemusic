import { useEffect } from "react";


export function useSetPageBlack() {
    useEffect(() => {
      document.body.classList.add("pageBack");
      return () => {
        document.body.classList.remove("pageBack");
      };
    }, []);
  }

  export function useApplyErrorPageImage(){
    useEffect(() => {
        document.body.classList.add("backgroundErrorPage");
        return () => {
          document.body.classList.remove("backgroundErrorPage");
        };
      }, []);
  }