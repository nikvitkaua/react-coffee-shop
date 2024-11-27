import AppBeans from "../app-beans/app-beans";

const AppPromo = (props) => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center"
      style={{
        background: `url(${props.bgPromoImgUrl}) center center / cover no-repeat`
      }}
    >
      <div className="container text-white">
        <h1 className="font-bold text-3xl leading-tight text-center mb-5">
          Everything You Love About Coffee
        </h1>
        <AppBeans beansColor={'white'} />
        <p className="mb-3 text-center text-2xl	mt-7">
          We makes every day full of energy and taste
        </p>
        <p className="mb-4 text-center text-2xl">
          Want to try our beans?
        </p>
        <a
          href="#about"
          className="flex items-center justify-center border-solid border-2 border-white max-w-32	py-1 px-11 my-0 mx-auto hover:text-black"
        >
          More
        </a>
      </div>
    </section>
  )
}

export default AppPromo;