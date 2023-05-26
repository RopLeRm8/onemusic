import HeadphonesIcon from "@mui/icons-material/Headphones";
import InfoIcon from "@mui/icons-material/Info";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import { useContext } from "react";
import fast from "../../assets/ID/fast.svg";
import person from "../../assets/ID/person.svg";
import security from "../../assets/ID/security.svg";
import balance from "../../assets/Profile/balance.svg";
import home from "../../assets/Profile/home.svg";
import keys from "../../assets/Profile/key.svg";
import services from "../../assets/Profile/services.svg";
import { IdContext } from "../../pages/IdPage";
import { ProfilePageContext } from "../../pages/ProfilePage";
import { MainContext } from "../../providers/RouteProvider";

export function useGetGlobalValues() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  return { firstColor, secondColor, font };
}

export function useGetIdPageValues() {
  const idValues = useContext(IdContext);
  const font = idValues.font;
  const firstColor = idValues.firstColor;
  const secondColor = idValues.secondColor;
  const BORDERINITIALCOLOR = idValues.BORDERINITIALCOLOR;
  const priorities = idValues.priorities;
  return { font, firstColor, secondColor, BORDERINITIALCOLOR, priorities };
}
export function useGetSteps() {
  const steps = [
    "Установите приложение с нашего сайта или площадок",
    "Зарегистрируйтесь в нашей системе",
    "Выберите любимые хиты или исполнителей",
    "Наслаждайтесь любимой музыкой и треками",
  ];
  return steps;
}

export function useGetProfileProperties() {
  const propsList = [
    {
      label: "Главная",
      picture: home,
    },
    {
      label: "Личные данные",
      picture: keys,
    },
    {
      label: "Сервисы",
      picture: services,
    },
    {
      label: "Баланс",
      picture: balance,
    },
  ];
  const optionsList = [
    {
      label: "Конфиденциальность",
      link: "",
    },
    {
      label: "Условия",
      link: "",
    },
    {
      label: "Помощь",
      link: "",
    },
  ];
  return { propsList, optionsList };
}

export function useGetIdPriorities() {
  const priorities = [
    {
      label: "Единый аккаунт для всех сервисов ONE.RU",
      picture: person,
    },
    {
      label: "Быстрый вход",
      picture: fast,
    },
    {
      label: "Безопасность и надежность",
      picture: security,
    },
  ];
  return priorities;
}

export function useGetProfilePageValues() {
  const ProfilePageContextVal = useContext(ProfilePageContext);
  const font = ProfilePageContextVal.font;
  const firstColor = ProfilePageContextVal.firstColor;
  const secondColor = ProfilePageContextVal.secondColor;
  return { font, firstColor, secondColor };
}
export function useGetNavbarLinks() {
  const pages = [
    {
      label: "Подписка",
      path: "/subscription",
      icon: <SubscriptionsIcon key={0} />,
    },
    {
      label: "Слушать",
      path: "/listen",
      icon: <HeadphonesIcon key={1} />,
    },
    {
      label: "О нас",
      path: "/about",
      icon: <InfoIcon key={2} />,
    },
    {
      label: "Подписаться",
      path: "/subscribe",
      icon: <UnsubscribeIcon key={3} />,
    },
  ];
  return pages;
}
