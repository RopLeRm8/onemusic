import { createContext, useContext } from "react";
import ProfileProperties from "../lib/ui/components/ProfilePage/ProfileProperties";
import UpperInfo from "../lib/ui/components/ProfilePage/UpperInfo";
import ProfileBoxMain from "../lib/ui/containers/ProfileBoxMain.jsx";
import { MainContext } from "../providers/RouteProvider";
export const ProfilePageContext = createContext({});
export default function ProfilePage() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];

  return (
    <ProfileBoxMain>
      <ProfilePageContext.Provider
        value={{ font: font, firstColor: firstColor, secondColor: secondColor }}
      >
        <UpperInfo />
        <ProfileProperties />
      </ProfilePageContext.Provider>
    </ProfileBoxMain>
  );
}
