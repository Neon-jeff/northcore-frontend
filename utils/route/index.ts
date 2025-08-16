export function checkActiveRoute(
  route: string,
  pathname: string,
  homeRoute = "/" // Default home route
) {
  const patharray = pathname.split("/").filter((item) => item !== "");
  const currentTab = route.split("/")[route.split("/").length - 1].trim();
  if (patharray.length === 0 && route === homeRoute) {
    return true;
  }

    const isActiveTab = patharray.includes(currentTab.toLocaleLowerCase());
    return isActiveTab;

}
