import { useContext } from "react";
import { ProfilePageContext } from "../../pages/ProfilePage";

export default function useGetProfilePageValues() {
  const ProfilePageContextVal = useContext(ProfilePageContext);
  const font = ProfilePageContextVal.font;
  const firstColor = ProfilePageContextVal.firstColor;
  const secondColor = ProfilePageContextVal.secondColor;
  return { font, firstColor, secondColor };
}
