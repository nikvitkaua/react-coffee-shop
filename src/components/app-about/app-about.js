import AppBeans from "../app-beans/app-beans";

const AppAbout = ({children, heading, imgUrl, imgAlt}) => {
  return (
    <section className="py-20">
      <div className="container my-0 mx-auto">
        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:justify-between">
          {imgUrl && <img src={imgUrl} alt={imgAlt}/>}
          <div>
            <h2 className="text-center mb-5">{heading}</h2>
            <AppBeans beansColor={'black'} />
            <p className="text-center mt-10 text-sm">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppAbout;