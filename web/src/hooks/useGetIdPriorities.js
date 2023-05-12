import fast from "../assets/ID/fast.png";
import person from "../assets/ID/person.png";
import security from "../assets/ID/security.png";

export default function useGetIdPriorities() {
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
