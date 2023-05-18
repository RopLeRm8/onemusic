export default function useGetNavbarLinks() {
  const pages = [
    ["Подписка", "rgba(63, 195, 128)", "See who leads now", "/leaderboard"],
    ["Слушать", "rgba(175, 65, 84)", "Custom car design", "/customize"],
    ["О нас", "rgba(159, 90, 253)", "Informative Page", "/about"],
    ["Подписаться", "rgba(241, 90, 34)", "FAQ page", "/gettingstarted"],
  ];
  return pages;
}
