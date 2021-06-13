import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TrapezoidSection from '../components/TrapezoidSection/TrapezoidSection.js';
import spiderman from '../images/home-carousel/spiderman-carousel.jpg';
import christmasHero from '../images/christmas/christmas-hero.jpg';
import ComicsImage from "../images/comics-image.jpg";
import marvelChampions from "../images/recent/marvel-champions.jpg";
import girl from "../images/recent/girl.jpg";
import marvelWomen from "../images/recent/marvel-women.jpg";

const Home = () => {
  const news = [
    {img: marvelChampions, title: "Remolques y extras", description: "¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones"},
    {img: girl, title: "Remolques y extras", description: "Women of Marvel le da la bienvenida a Brittney Morris, autora de la novela precuela de 'Marvel's Spider-Man: Miles Morales'"},
    {img: marvelWomen, title: "Programas de televisión", description: `Dónde leer el trabajo de las mujeres que aparecen en Marvel's 616: "Más alto, más rápido"`}
  ]

  return (
    <div className="">
      <Carousel
        // autoPlay
        interval="5000"
        infiniteLoop
        showArrows={false}
        // showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        renderThumbs={(list) =>
          list.map((item) => {
          return <h1>{item.props.title}</h1>
        }
        )}
      >
        <div title="image1">
          <h1>adsakhdkjsa</h1>
          <img src={spiderman} alt="hero-1" title="image1"/>
        </div>
        <div title="image2">
          <h1>adsakhdkjsa</h1>
          <img src={spiderman} alt="hero-2" title="image1"/>
        </div>
        <div title="image3">
          <h1>adsakhdkjsa</h1>
          <img src={spiderman} alt="hero-3" title="image1"/>
        </div>
      </Carousel>
      <TrapezoidSection
        img={christmasHero}
        title="Guía de regalos navideños 2020"
        description="Los regalos perfectos para todos los fanáticos de Marvel"
        link="Ver ahora"
      />
      <TrapezoidSection
        alert
        img={ComicsImage}
        title="NUEVO EN MARVEL
        UNLIMITED"
        description="¡Lea estos 28,000 cómics digitales por$ 9.99 al
        mes!"
        link="Obtén marvel unlimited"
      />
      <section className="bmargin-left my-8">
        <div className="uppercase text-xl font-bold mb-5">Lo último</div>
        <div className="flex flex-col gap-5">
        {
          news.map(function(el, index){
            return (
              <div className="flex gap-8">
                <img className="w-1/3" src={el.img} alt={index}/>
                <div className="w-2/5">
                  <p className="uppercase text-light-grey font-bold">{ el.title }</p>
                  <p className="font-bold text-xl">{ el.description }</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </section>
    </div>
  )
}

export default Home
