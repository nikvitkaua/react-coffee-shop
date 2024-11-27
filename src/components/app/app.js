import AppHeader from '../app-header/app-header'
import AppPromo from "../app-promo/app-promo";
import AppAbout from "../app-about/app-about";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <AppPromo bgPromoImgUrl={'./img/home/home-promo.png'} />
        <AppAbout />
      </main>
    </>
  )
}


export default App;