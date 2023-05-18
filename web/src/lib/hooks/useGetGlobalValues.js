import { useContext } from "react";
import { MainContext } from "../../providers/RouteProvider";

export default function useSetGlobalValues() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  return { firstColor, secondColor, font };
}
