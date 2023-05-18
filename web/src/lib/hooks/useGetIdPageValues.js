import { useContext } from "react";
import { IdContext } from "../../pages/IdPage";

export default function useGetIdPageValues() {
  const idValues = useContext(IdContext);
  const font = idValues.font;
  const firstColor = idValues.firstColor;
  const secondColor = idValues.secondColor;
  const BORDERINITIALCOLOR = idValues.BORDERINITIALCOLOR;
  const priorities = idValues.priorities;
  return { font, firstColor, secondColor, BORDERINITIALCOLOR, priorities };
}
