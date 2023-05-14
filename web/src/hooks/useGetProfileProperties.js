import balance from "../assets/Profile/balance.png";
import home from "../assets/Profile/home.png";
import keys from "../assets/Profile/key.png";
import services from "../assets/Profile/services.png";
export default function useGetProfileProperties() {
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
