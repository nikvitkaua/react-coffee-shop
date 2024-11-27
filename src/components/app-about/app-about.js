import AppBeans from "../app-beans/app-beans";

const AppAbout = () => {
  return (
    <section className="py-20">
      <div className="container my-0 mx-auto">
        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:justify-between">
          <img src="/img/pleasure/coffee-cup.png" alt="Coffee cup"/>
          <div>
            <h2 className="text-center mb-5">About Us</h2>
            <AppBeans beansColor={'black'} />
            <p className="text-center mt-10 text-sm">
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
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppAbout;