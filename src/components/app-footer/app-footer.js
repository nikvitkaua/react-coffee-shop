import AppNavigation from "../app-navigation/app-navigation";
import AppBeans from "../app-beans/app-beans";

const AppFooter = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-7 bg-white py-4">
      <AppNavigation color={'black'} />
      <AppBeans beansColor={'black'} />
    </footer>
  )
}

export default AppFooter;