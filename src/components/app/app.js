import AppHeader from '../app-header/app-header'
import AppPromo from "../app-promo/app-promo";
import AppAbout from "../app-about/app-about";

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <AppPromo bgPromoImgUrl={'./img/home/home-promo.png'} />
        <AppAbout
          heading={'About Us'}
        >
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.
          <br/>
          <br/>
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
        </AppAbout>
      </main>
    </>
  )
}


export default App;