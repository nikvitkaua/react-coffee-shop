import AppNavigation from "../app-navigation/app-navigation";

const AppHeader = () => {
  return(
    <header className="absolute w-max z-50 pt-7">
      <div className="container px-4 lg:px-36">
        <AppNavigation color={'white'} />
      </div>
    </header>
  )
}


export default AppHeader